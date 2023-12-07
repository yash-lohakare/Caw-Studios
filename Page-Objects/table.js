const{test, expect} = require('@playwright/test')
exports.Table = class Table{
    constructor(page){
        this.page = page
        this.expandTableData = page.locator("details summary")
        this.jsonTextArea = page.locator("p textarea[id='jsondata']")
        this.refreshBtn = page.getByRole('button',{name:'Refresh Table'})
    }
}