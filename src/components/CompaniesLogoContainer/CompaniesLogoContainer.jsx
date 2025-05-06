import React from 'react'
import AirbnbSvgLogo from './AirbnbSvgLogo/AirbnbSvgLogo'
import GoogleSvgLogo from './GoogleSvgLogo/GoogleSvgLogo'
import MicrosoftSvgLogo from './MicrosoftSvgLogo/MicrosoftSvgLogo'
import SpotifySvgLogo from './SpotifySvgLogo/SpotifySvgLogo'
import MailChimpSvgLogo from './MailchimpSvgLogo/MailchimpSvgLogo'
import MashAbleSvgLogo from './MashableSvgLogo/MashableSvgLogo'


export default function CompaniesLogoContainer() {
    return (
        <>
            <section className="bg-white dark:bg-gray-900">
                <div className="max-w-screen-xl px-4 pb-8 mx-auto lg:pb-16">
                    <div
                        className="grid grid-cols-2 gap-8 text-gray-500 sm:gap-12 sm:grid-cols-3 lg:grid-cols-6 dark:text-gray-400">
                        <AirbnbSvgLogo />
                        <GoogleSvgLogo />
                        <MicrosoftSvgLogo />
                        <SpotifySvgLogo />
                        <MailChimpSvgLogo />
                        <MashAbleSvgLogo />
                    </div>
                </div>
            </section>
        </>
    )
}
