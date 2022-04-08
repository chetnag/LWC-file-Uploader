import { LightningElement,api } from 'lwc';
import {ShowToastEvent} from 'lightning/platformShowToastEvent';

export default class FileUploader extends LightningElement {
    @api recordId;

    get acceptedFormats() {
        return ['.pdf', '.png','.jpg','.jpeg'];
    }
    uploadHandler(event) {
        // Get the list of uploaded files
        const uploadedFile = event.detail.files;
        let fileName = '';
        for(let i = 0; i < uploadedFile.length; i++) {
            fileName += uploadedFile[i].name;
        }
        this.dispatchEvent(
            new ShowToastEvent({
                title: 'Success',
                message: uploadedFile.length + ' Files uploaded successfully - ' + fileName,
                variant: 'success',
            }),
        );
    }
}