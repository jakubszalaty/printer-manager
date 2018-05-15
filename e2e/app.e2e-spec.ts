import { AppPage } from './app.po'
import { browser, element, by } from 'protractor'

describe('printer-manager App', () => {
    let page: AppPage

    beforeEach(() => {
        page = new AppPage()
    })

    it('should display app title', () => {
        page.navigateTo()
        expect(page.getToobarTitle()).toEqual('Printer Manager')
    })

    it('should return one element on list', () => {
        page.navigateTo()
        page.enterSearchText('HP')
        expect(page.getPrintersList().count()).toEqual(1)
    })

    it('should add new printer to list', async () => {
        page.navigateTo()
        await page.waitForMainFab()
        page.createNewPrinter()
        expect(page.getLastAddedPrinterTitle()).toEqual('New printer (offline)')
    })
})
