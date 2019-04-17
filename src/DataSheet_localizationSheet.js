import DataSheetBase from './DataSheetBase.js';

export default class DataSheet_localizationSheet extends DataSheetBase {

  constructor(id, updateCb) {
    super(id, updateCb);
    this.requestedKeyPath = "";  // this value can be specified in the React Studio data sheet UI
  }

  makeDefaultItems() {
    // eslint-disable-next-line no-unused-vars
    let key = 1;
    // eslint-disable-next-line no-unused-vars
    let item;
    
    item = {};
    this.items.push(item);
    item['key'] = "buttonsbutton_login_128141";
    item['en'] = "Login";
    
    item = {};
    this.items.push(item);
    item['key'] = "registerbtn_regitser_596969";
    item['en'] = "Regitser";
    
    item = {};
    this.items.push(item);
    item['key'] = "login_logintoyouraccoun_279958";
    item['en'] = "Login to your account";
    
    item = {};
    this.items.push(item);
    item['key'] = "login_email_825869";
    item['en'] = "e-mail";
    
    item = {};
    this.items.push(item);
    item['key'] = "login_password_809056";
    item['en'] = "Password";
    
    item = {};
    this.items.push(item);
    item['key'] = "login_findajobfindaca_593687";
    item['en'] = "FIND A JOB          FIND A CANDIDATE          APPLY TO TEACH          ";
    
    item = {};
    this.items.push(item);
    item['key'] = "login_youremail_1005552";
    item['en'] = "Your e-mail";
    
    item = {};
    this.items.push(item);
    item['key'] = "login_youremailcopy_538947";
    item['en'] = "Your e-mail";
  }

  getStringsByLanguage = () => {
    let stringsByLang = {};
    for (let row of this.items) {
      const locKey = row.key;
      for (let key in row) {
        if (key === 'key')
          continue;
        let langObj = stringsByLang[key] || {};
        langObj[locKey] = row[key];
        stringsByLang[key] = langObj;
      }
    }
    return stringsByLang;
  }

}
