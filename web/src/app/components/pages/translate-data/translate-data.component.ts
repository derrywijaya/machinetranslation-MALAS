import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Guid} from 'guid-typescript';
import {DataAccessService} from 'src/services/data-access.service';
import {FunctionService} from 'src/services/function.service';
import {IDropdown, IInputData} from 'src/services/models.service';
import {ReffserviceService} from 'src/services/reffservice.service';

@Component({
    selector: 'app-translate-data',
    templateUrl: './translate-data.component.html',
    styleUrls: ['./translate-data.component.scss']
})
export class TranslateDataComponent implements OnInit {
    get selectedData(): IInputData {
        return this._selectedData;
    }

    set selectedData(value: IInputData) {
        this._selectedData = value;
    }

    constructor(private access: FunctionService,
                private _reffService: ReffserviceService,
                private fb: FormBuilder) {
    }

    public ngForm: FormGroup;
    public IsSuccess = false;
    public message = '';
    private _selectedData: IInputData;
    public languages: IDropdown[];

    pageTitleArea: pageTitle[] = [
        {
            title: 'Contact Us'
        }
    ];
    contactInfoBox1: InfoBox1[] = [
        {
            icon: 'bx bx-map',
            title: 'Our Address',
            location: '175 5th Ave, New York, NY 10010, United States'
        }
    ];
    contactInfoBox2: InfoBox2[] = [
        {
            icon: 'bx bx-phone-call',
            title: 'Contact',
            number: '(+44) - 45789 - 5789',
            email: 'hello@wilo.com'
        }
    ];
    contactInfoBox3: InfoBox3[] = [
        {
            icon: 'bx bx-time-five',
            title: 'Hours of Operation',
            text1: 'Monday - Friday: 09:00 - 20:00',
            text2: 'Sunday & Saturday: 10:30 - 22:00'
        }
    ];

    sectionTitle: sectionTitleContent[] = [
        {
            subTitle: 'Upload your translation data',
            title: 'Ready to Translate?',
            paragraphText: 'Your email address will not be published. Required fields are marked *'
        }
    ];
    contactImage: Image[] = [
        {
            img: 'assets/img/contact.png'
        }
    ];

    ngOnInit(): void {
        this._selectedData = {} as IInputData;
        this._selectedData.sourceModel = '';

        this._reffService.getLanguages().subscribe(
            (d: IDropdown[]) => {
                this.languages = d;
            }
        );
        this.createForm();
    }

//   public valueSelected() {
//     this.languages = this.languages.filter(item => item.name === this.selectedBrand);
// }

    createForm() {
        this.ngForm = this.fb.group({
            // id: [''],
            email: ['', Validators.required],
            sourceModel: [''], // , Validators.required],
            messageToTranslate: ['', Validators.required],
            // lastName: [''],
            //   addressLine1: ['', Validators.required],
            //   addressLine2: [''],
            //   city: ['', Validators.required],
            //   state: ['', Validators.required],
            //   postalCode: [''],
            //   phoneNumber: ['', Validators.required],
            //   emailAddress: [''],
            //   openingHour: ['', Validators.required],
            //   closedHour: ['', Validators.required],
            //   additionalInfo: [''],
            //   description: [''],
        });
    }

    onSubmit() {
        const dataToSave: IInputData = this.ngForm.value;
        dataToSave.id = String(Guid.create());
        dataToSave.sourceModel = this._selectedData.sourceModel;
        dataToSave.messageToTranslate = this._selectedData.messageToTranslate;
        dataToSave.completed = false;
        dataToSave.partitionKey = dataToSave.completed;
        // this.showToast(this.status, "Berhasil", "Data berhasil di simpan di database", "Sukses !!");
        console.log(this.ngForm.get('sourceModel').value);
        console.log(this.ngForm.get('messageToTranslate').value);
        console.log(dataToSave);
        console.log('Submitting data - Translate');
        this.access.Translate(dataToSave).subscribe(
            () => {
                this.setSuccessMessage();
                document.getElementById('topDiv').scrollIntoView({
                    behavior: 'smooth',
                    block: 'start',
                    inline: 'nearest'
                });
            }
        );
    }

    setSuccessMessage() {
        this.IsSuccess = true;
    }

    testEmail() {
        // this._emailService.sendEmail().then();
    }

    openFile(event, type) {
        const input = event.target;
        for (let index = 0; index < input.files.length; index++) {
            const reader = new FileReader();
            reader.onload = () => {
                // this 'text' is the content of the file
                const text = reader.result;
                // console.log(text);
                if (type === 'source') {
                    this._selectedData.sourceLang = this._selectedData.sourceLang + text;
                } else if (type === 'dest') {
                    this._selectedData.destLang = this._selectedData.destLang + text;
                } else if (type === 'sourceDic') {
                    this._selectedData.sourceToDestDic = this._selectedData.sourceToDestDic + text;
                } else if (type === 'descDic') {
                    this._selectedData.destToSourceDic = this._selectedData.destToSourceDic + text;
                }

            };
            reader.readAsText(input.files[index]);
        }


    }


}

class pageTitle {
    title: string;
}

class InfoBox1 {
    icon: string;
    title: string;
    location: string;
}

class InfoBox2 {
    icon: string;
    title: string;
    number: string;
    email: string;
}

class InfoBox3 {
    icon: string;
    title: string;
    text1: string;
    text2: string;
}

class sectionTitleContent {
    subTitle: string;
    title: string;
    paragraphText: string;
}

class Image {
    img: string;
}
