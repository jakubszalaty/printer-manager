import { browser, by, element } from 'protractor'

export class AppPage {
    navigateTo() {
        return browser.get('/')
    }

    getToobarTitle() {
        return element(by.css('app-root mat-toolbar span')).getText()
    }

    enterSearchText(text: string) {
        return element(by.css('app-root .search-form input')).sendKeys(text)
    }

    getPrintersList() {
        return element.all(by.css('app-root .item-list mat-list-item'))
    }

    createNewPrinter() {
        const button = element(by.css('app-root .main-fab button')).click()
    }

    waitForMainFab() {
        return browser.wait(async () => {
            const transform = await element(by.css('.main-fab')).getCssValue('transform')
            return transform === 'matrix(1, 0, 0, 1, 0, 0)'
        }, 3000)
    }

    getLastAddedPrinterTitle() {
        return element(by.css('app-root .item-list mat-list-item:last-child h3')).getText()
    }
}
