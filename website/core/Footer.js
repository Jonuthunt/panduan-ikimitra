/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

const React = require('react');

class Footer extends React.Component {
  docUrl(doc, language) {
    const baseUrl = this.props.config.baseUrl;
    const docsUrl = this.props.config.docsUrl;
    const docsPart = `${docsUrl ? `${docsUrl}/` : ''}`;
    const langPart = `${language ? `${language}/` : ''}`;
    return `${baseUrl}${docsPart}${langPart}${doc}`;
  }

  pageUrl(doc, language) {
    const baseUrl = this.props.config.baseUrl;
    return baseUrl + (language ? `${language}/` : '') + doc;
  }

  render() {
    return (<div />)
  }

  x_render() {
    return (
      <footer className="nav-footer" id="footer">
        <section className="sitemap">
          <a href={this.props.config.baseUrl} className="nav-home">
            {this.props.config.footerIcon && (
              <img
                src={this.props.config.baseUrl + this.props.config.footerIcon}
                alt={this.props.config.title}
                width="66"
                height="58"
              />
            )}
          </a>
          <div>
            <h5>Panduan IKI Mitra</h5>
            <a href={this.docUrl('doc1.html', this.props.language)}>
              Pendaftaran
            </a>
            <a href={this.docUrl('doc2.html', this.props.language)}>
              Pengenalan Aplikasi IKI Mitra
            </a>
            <a href={this.docUrl('doc3.html', this.props.language)}>
              Bertransaksi di IKI Mitra
            </a>
          </div>
          <div>
            <h5>Mengenai IKI</h5>
            <a
              href="https://iki.id"
              target="_blank"
              rel="noreferrer noopener">
              Tentang IKI
            </a>
            <a
              href="https://play.google.com/store/apps/details?id=id.iki.mitra"
              target="_blank"
              rel="noreferrer noopener">
              Download IKI Mitra
            </a>
          </div>
        </section>

        <section className="copyright">{this.props.config.copyright}</section>
      </footer>
    );
  }
}

module.exports = Footer;
