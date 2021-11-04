import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators  } from '@angular/forms';
import { Guid } from 'guid-typescript';
import { DataAccessService } from 'src/services/data-access.service';
import { FunctionService } from 'src/services/function.service';
import { IDropdown, IInputData } from 'src/services/models.service';
import { ReffserviceService } from 'src/services/reffservice.service';

@Component({
  selector: 'app-upload-data',
  templateUrl: './upload-data.component.html',
  styleUrls: ['./upload-data.component.scss']
})
export class UploadDataComponent implements OnInit {
    constructor(private access: FunctionService,
                // tslint:disable-next-line:variable-name
                private _reffService: ReffserviceService,
                private fb: FormBuilder) { }

    public ngForm: FormGroup;
    public IsSuccess = false;
    // tslint:disable-next-line:variable-name
    public selected_data: IInputData;
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
        subTitle: 'Upload your data',
        title: 'Ready to Get Started?',
        paragraphText: 'Your email address will not be published. Required fields are marked *'
    }
];
contactImage: Image[] = [
    {
        img: 'assets/img/contact.png'
    }
];

  ngOnInit(): void {
    this.selected_data = {} as IInputData;
    this.selected_data.sourceLang = '';
    this.selected_data.destLang = '';
    this.selected_data.destLangId = '';
    this.selected_data.sourceLangId = '';

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
      sourceLangId: [''], // , Validators.required],
      sourceLang: ['', Validators.required],
      sourceLangDesc: ['', Validators.required],
      destLangId: [''], // , Validators.required],
      destLang: ['', Validators.required],
      destLangDesc: ['', Validators.required],
      sourceToDestDic: [''],
      destToSourceDic: [''],
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
    dataToSave.sourceLang = this.selected_data.sourceLang;
    dataToSave.destLang = this.selected_data.destLang;
    dataToSave.sourceToDestDic = this.selected_data.sourceToDestDic;
    dataToSave.destToSourceDic = this.selected_data.destToSourceDic;
    dataToSave.completed = false;
    dataToSave.partitionKey = dataToSave.completed;
    // this.showToast(this.status, "Berhasil", "Data berhasil di simpan di database", "Sukses !!");
    console.log(this.ngForm.get('destLangId').value);
    console.log(this.ngForm.get('sourceLangId').value);
    console.log(dataToSave);
    console.log('Submitting data to db');
    this.access.SaveData(dataToSave).subscribe(
        () => {this.setSuccessMessage();
               document.getElementById('topDiv').scrollIntoView({behavior: 'smooth', block: 'start', inline: 'nearest'});
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
    // tslint:disable-next-line:prefer-for-of
    for (let index = 0; index < input.files.length; index++) {
        const reader = new FileReader();
        reader.onload = () => {
            // this 'text' is the content of the file
            const text = reader.result;
            // console.log(text);
            if (type === 'source') {
            this.selected_data.sourceLang = this.selected_data.sourceLang + text ;
            } else  if (type === 'dest') {
            this.selected_data.destLang = this.selected_data.destLang + text ;
            } else  if (type === 'sourceDic') {
            this.selected_data.sourceToDestDic = this.selected_data.sourceToDestDic + text ;
            } else  if (type === 'descDic') {
            this.selected_data.destToSourceDic = this.selected_data.destToSourceDic + text ;
            }

        };
        reader.readAsText(input.files[index]);
    }

}



}
// tslint:disable-next-line:class-name
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
