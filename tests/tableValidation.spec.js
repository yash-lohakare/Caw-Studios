const{test, expect} = require('@playwright/test')

// For Page object Model - Page is kept under '/Page-Objects/table'
const {Table} = require('../Page-Objects/table')
const userData = require('../data.json')
test('Validate table data with json data', async({page})=>{
    let table = new Table(page)

    // Visiting URL
    await page.goto("https://testpages.herokuapp.com/styled/tag/dynamic-table.html")

    // Clicking on expand table button 
    await table.expandTableData.click()

    // Filling json data in TextArea
    await table.jsonTextArea.fill(JSON.stringify(userData))

    // Click on refresh button
    await table.refreshBtn.click()
    
    // Table Operation to get rowwise data and push into array of objects
    const tableRows = page.locator("#dynamictable tr")
    console.log(JSON.stringify(userData))
    let rowsData = []
    for(let i=1; i< await tableRows.count();i++){
        let row = tableRows.nth(i)
        const texts = await row.allInnerTexts()
        const [name, age, gender]  = texts[0].split("\t")
        if (name && age && gender) {
            rowsData.push({
                name: name,
                age: parseInt(age),
                gender: gender
            });
        }
    }
   
    // Assertions
    expect(JSON.stringify(userData),"Not same").toBe(JSON.stringify(rowsData))
    console.log("Data is same")
})