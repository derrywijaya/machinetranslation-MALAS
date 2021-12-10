import uuid


def get_translated_item():
    translated_item = {
    'id':  str(uuid.uuid4()),
    "email": "test_email@test.com",
    "sourceLangId": "sq",
    "sourceLangDesc": "1",
    "sourceLang": "some test test test  text",
    "destLangId": "ab",
    "destLang": "some text more testing to be had here as well",
    "destLangDesc": "1",
    "sourceToDestDic": "null",
    "destToSourceDic": "null",
    "completed": "false",
    "partitionKey": "false",
    "_rid": "GsR+AKgCxfMBAAAAAAAAAA==",
    "_self": "dbs/GsR+AA==/colls/GsR+AKgCxfM=/docs/GsR+AKgCxfMBAAAAAAAAAA==/",
    "_etag": "\"50002ea3-0000-0100-0000-61836dd20000\"",
    "_attachments": "attachments/",
    "_ts": 1636003282
}
    return translated_item
