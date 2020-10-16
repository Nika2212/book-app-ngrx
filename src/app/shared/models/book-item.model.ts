export class BookItem {
  public id: string;
  public accessInfo: {
    country: 'GE',
    viewability: string,
    embeddable: boolean,
    textToSpeechPermission: 'ALLOWED',
    epub: { isAvailable: boolean, downloadLink: string },
    pdf: { isAvailable: boolean, downloadLink: string },
    publicDomain: boolean,
    quoteSharingAllowed: boolean,
    webReaderLink: string
  };
  public etag: string;
  public kind: string;
  public saleInfo: { country: string, saleability: string, isEbook: boolean, buyLink: string };
  public searchInfo: { textSnippet: string };
  public selfLink: string;
  public volumeInfo: {
    allowAnonLogging: boolean,
    authors: string[],
    averageRating: number
    canonicalVolumeLink: string,
    categories: string[],
    contentVersion: string
    description: string,
    imageLinks: { smallThumbnail: string, thumbnail: string },
    industryIdentifiers: any[],
    infoLink: string,
    language: string,
    maturityRating: string,
    pageCount: number,
    panelizationSummary: { containsEpubBubbles: boolean, containsImageBubbles: boolean },
    previewLink: string,
    printType: string,
    publishedDate: string,
    ratingsCount: number,
    readingModes: { text: boolean, image: boolean }
    title: string
  };
}
