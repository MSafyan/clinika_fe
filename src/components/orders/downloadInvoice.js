import moment from 'moment';
import easyinvoice from 'easyinvoice'
import React from 'react';
import {
	IconButton,
} from '@material-ui/core';

import GetAppIcon from '@material-ui/icons/GetApp';
export default class EasyInvoiceSample extends React.Component {
  constructor(props) {
    super(props)
    /* this.invoiceBase64 = "Hello world!"     */
    this.state = {
    	 invoiceBase64: ''
    }
  }
  async createInvoice() {
    //See documentation for all data properties
    const data = this.getSampleData(this.props.person); 
    const result = await easyinvoice.createInvoice(data);  
  	this.setState({
			invoiceBase64: result.pdf
    });
  }
  async downloadInvoice() {
    const fileName=`${this.props.person.customer.id}-${this.props.person.id}.pdf`;
    //See documentation for all data properties
    const data = this.getSampleData(this.props.person); 
    const result = await easyinvoice.createInvoice(data);  
    easyinvoice.download(fileName, result.pdf);
    //	you can download like this as well:
    //	easyinvoice.download();
    //	easyinvoice.download('myInvoice.pdf');  	
  }
  async renderInvoice(){
     //See documentation for all data properties
     document.getElementById("pdf").innerHTML = "loading...";
     const data = this.getSampleData(this.props.person); 
     const result = await easyinvoice.createInvoice(data);      
     easyinvoice.render('pdf', result.pdf);
  }
  render() {
    return (
      <div>
        <IconButton onClick={()=>this.downloadInvoice()}>
          <GetAppIcon/>
        </IconButton>
      </div>
    )
  }
  
  getSampleData(entity) {
    const services=[];
    for(let service of entity.services){
      services.push({
        "quantity": "1",
        "description": `${service.serviceName}`,
        "tax": -entity.discount,
        "price": `${service.servicePrice}`
      })
    }



    var data = {
      "documentTitle": "RECEIPT", //Defaults to INVOICE
      //"locale": "de-DE", //Defaults to en-US, used for number formatting (see docs)
      "currency": "LKR", //See documentation 'Locales and Currency' for more info
      "taxNotation": "discount", //or gst
      "marginTop": 25,
      "marginRight": 25,
      "marginLeft": 25,
      "marginBottom": 25,
      "logo": `https://imagesatif.s3.amazonaws.com/Logo+for+Website.PNG`, //or base64
      "background": "https://public.easyinvoice.cloud/img/watermark-draft.jpg", //or base64 //img or pdf
      "sender": {
          "company": "Volante",
          "address": "Sample Street 123",
          "zip": "1234 AB",
          "city": "Sampletown",
          "country": "Sri Lanka"
      },
      "client": {
        "company": `${entity.customer.firstName || ''}`,
        "address": `${entity.customer.address || ''}`,
        "zip": `${entity.customer.contactNo1 || ''}`,
        "city":`${entity.customer.email || ''}`,
        "country":`${''}`,
        "":"",
        "custom1":"Vehicle Reg No:",
        "custom2":`${entity.vehicle.vehicleRegNo}`,
        "custom3":'discount Number',
        "custom4":`${entity.coupon}`,
      },
      "invoiceNumber": `${entity.id || ''}`,
      "invoiceDate": `${moment(entity.created_at).format('MM-DD-YYYY')}`,
      "products": services,
      "bottomNotice": "Thanks for going bussiness with Volante",
      //Used for translating the headers to your preferred language
      //Defaults to English. Below example is translated to Dutch
      // "translate": { 
      //     "invoiceNumber": "Factuurnummer",
      //     "invoiceDate": "Factuurdatum",
      //     "products": "Producten", 
      //     "quantity": "Aantal", 
      //     "price": "Prijs",
      //     "subtotal": "Subtotaal",
      //     "total": "Totaal" 
      // }
  };

  return data;
}
}
