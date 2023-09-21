import '@styles/globals.css';

export const metadata = {
    title: "Genmedia",
    description: "Create visuals"
}

const RootLayout = ({ children }) => {
    return (
        <html lang='en'>
            <body>
                <div className='main'>

                </div>
                <main className='app'>
                    {children}
                </main>
            </body>
        </html>
    )
}

export default RootLayout

