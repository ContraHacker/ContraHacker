import Document, { Html, Head, Main, NextScript } from 'next/document';

export default class WebsiteWrapper extends Document {
    static async getInitialProps(ctx) {
        const initialProps = await Document.getInitialProps(ctx);
        return { ...initialProps };
    }

    render() {
        return (
            <Html lang = 'en'>
                <Head>
                    <meta charSet = 'utf-8' />
                    <meta name = 'description' content = 'Ibrahim Farooqui' />
                    <link rel = 'icon' href = '/favicon.png' />
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        );
    }
}
