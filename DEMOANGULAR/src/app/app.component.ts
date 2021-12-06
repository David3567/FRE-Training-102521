import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  {
  title = 'Book Search';
  searchText!:string;
  books = [
    {
      "kind": "books#volume",
      "id": "sLfHGZzEy9cC",
      "etag": "MbGf/0Ejffk",
      "selfLink": "https://www.googleapis.com/books/v1/volumes/sLfHGZzEy9cC",
      "volumeInfo": {
        "title": "Master XML",
        "publisher": "Excel Books India",
        "industryIdentifiers": [
          {
            "type": "ISBN_13",
            "identifier": "9789350622551"
          },
          {
            "type": "ISBN_10",
            "identifier": "9350622556"
          }
        ],
        "readingModes": {
          "text": false,
          "image": true
        },
        "printType": "BOOK",
        "maturityRating": "NOT_MATURE",
        "allowAnonLogging": false,
        "contentVersion": "0.1.1.0.preview.1",
        "imageLinks": {
          "smallThumbnail": "http://books.google.com/books/content?id=sLfHGZzEy9cC&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
          "thumbnail": "http://books.google.com/books/content?id=sLfHGZzEy9cC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
        },
        "language": "en",
        "previewLink": "http://books.google.ca/books?id=sLfHGZzEy9cC&pg=PA19&dq=bookname&hl=&cd=1&source=gbs_api",
        "infoLink": "http://books.google.ca/books?id=sLfHGZzEy9cC&dq=bookname&hl=&source=gbs_api",
        "canonicalVolumeLink": "https://books.google.com/books/about/Master_XML.html?hl=&id=sLfHGZzEy9cC"
      },
      "saleInfo": {
        "country": "CA",
        "saleability": "NOT_FOR_SALE",
        "isEbook": false
      },
      "accessInfo": {
        "country": "CA",
        "viewability": "PARTIAL",
        "embeddable": true,
        "publicDomain": false,
        "textToSpeechPermission": "ALLOWED",
        "epub": {
          "isAvailable": false
        },
        "pdf": {
          "isAvailable": false
        },
        "webReaderLink": "http://play.google.com/books/reader?id=sLfHGZzEy9cC&hl=&printsec=frontcover&source=gbs_api",
        "accessViewStatus": "SAMPLE",
        "quoteSharingAllowed": false
      },
      "searchInfo": {
        "textSnippet": "&lt;CATALOGS&gt; &lt;CATEGORY TYPE=”XML”&gt; &lt;BOOK BESTSELLER=”YES”&gt; &lt;\u003cb\u003eBOOKNAME\u003c/b\u003e&gt;CLOUDS TO CODE&lt;/\u003cb\u003eBOOKNAME\u003c/b\u003e&gt; &lt;AUTHORNAME&gt;JESSE LIBERTY&lt;/AUTHORNAME&gt; &lt;ISBN&gt;l—86lOOO—95—2&lt;/ISBN&gt; &lt;PUBLISHER&gt;WROX PRESS&lt;/PUBLISHER&gt; &lt;PRICE CURRENCY=”USD”&gt;42.00&lt;/PRICE&gt; &lt;/BOOK&gt;&nbsp;..."
      }
    },
    {
      "kind": "books#volume",
      "id": "69UirgZ5nL4C",
      "etag": "qgCLshaEE+U",
      "selfLink": "https://www.googleapis.com/books/v1/volumes/69UirgZ5nL4C",
      "volumeInfo": {
        "title": "The Essential Guide to Flex 2 with ActionScript 3.0",
        "authors": [
          "Charles Brown"
        ],
        "publisher": "Apress",
        "publishedDate": "2007-05-10",
        "description": "This is a comprehensive tutorial and reference guide to ActionScript 3, Flex, and Flexbuilder 2 that teaches readers everything they need to know about these new technologies, from the very beginning, right through advanced topics. Readers will need general web development experience, and ideally have Flash and ActionScripting experience, although this isn't essential. This book is one of the first to offer thorough coverage of these new technologies. The author, Charles E. Brown, is an acknowledged expert in Flash development and training. His in-depth knowledge of application development and effective teaching methods is evident on every page of this essential handbook.",
        "industryIdentifiers": [
          {
            "type": "ISBN_10",
            "identifier": "1430203366"
          },
          {
            "type": "ISBN_13",
            "identifier": "9781430203360"
          }
        ],
        "readingModes": {
          "text": false,
          "image": true
        },
        "pageCount": 520,
        "printType": "BOOK",
        "categories": [
          "Computers"
        ],
        "averageRating": 3,
        "ratingsCount": 1,
        "maturityRating": "NOT_MATURE",
        "allowAnonLogging": false,
        "contentVersion": "2.4.2.0.preview.1",
        "panelizationSummary": {
          "containsEpubBubbles": false,
          "containsImageBubbles": false
        },
        "imageLinks": {
          "smallThumbnail": "http://books.google.com/books/content?id=69UirgZ5nL4C&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
          "thumbnail": "http://books.google.com/books/content?id=69UirgZ5nL4C&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
        },
        "language": "en",
        "previewLink": "http://books.google.ca/books?id=69UirgZ5nL4C&pg=PA297&dq=bookname&hl=&cd=2&source=gbs_api",
        "infoLink": "https://play.google.com/store/books/details?id=69UirgZ5nL4C&source=gbs_api",
        "canonicalVolumeLink": "https://play.google.com/store/books/details?id=69UirgZ5nL4C"
      },
      "saleInfo": {
        "country": "CA",
        "saleability": "FOR_SALE",
        "isEbook": true,
        "listPrice": {
          "amount": 62.52,
          "currencyCode": "CAD"
        },
        "retailPrice": {
          "amount": 50.02,
          "currencyCode": "CAD"
        },
        "buyLink": "https://play.google.com/store/books/details?id=69UirgZ5nL4C&rdid=book-69UirgZ5nL4C&rdot=1&source=gbs_api",
        "offers": [
          {
            "finskyOfferType": 1,
            "listPrice": {
              "amountInMicros": 62520000,
              "currencyCode": "CAD"
            },
            "retailPrice": {
              "amountInMicros": 50020000,
              "currencyCode": "CAD"
            },
            "giftable": true
          }
        ]
      },
      "accessInfo": {
        "country": "CA",
        "viewability": "PARTIAL",
        "embeddable": true,
        "publicDomain": false,
        "textToSpeechPermission": "ALLOWED",
        "epub": {
          "isAvailable": false
        },
        "pdf": {
          "isAvailable": true,
          "acsTokenLink": "http://books.google.ca/books/download/The_Essential_Guide_to_Flex_2_with_Actio-sample-pdf.acsm?id=69UirgZ5nL4C&format=pdf&output=acs4_fulfillment_token&dl_type=sample&source=gbs_api"
        },
        "webReaderLink": "http://play.google.com/books/reader?id=69UirgZ5nL4C&hl=&printsec=frontcover&source=gbs_api",
        "accessViewStatus": "SAMPLE",
        "quoteSharingAllowed": false
      },
      "searchInfo": {
        "textSnippet": "\u003cb\u003ebookName\u003c/b\u003e}&quot; /&gt; In this case, the source is going to be the repeating node, \u003cb\u003ebookName\u003c/b\u003e, of the Model tag bookData. You don&#39;t need mention the root, books, at all. Since you are referring to another MXML structure, you are enclosing the&nbsp;..."
      }
    },
    {
      "kind": "books#volume",
      "id": "bIXEQX8svOoC",
      "etag": "WyEkZUfEMXg",
      "selfLink": "https://www.googleapis.com/books/v1/volumes/bIXEQX8svOoC",
      "volumeInfo": {
        "title": "Web Technologies: Tcp/ip to Internet Application Architectures",
        "authors": [
          "Achyut S. Godbole",
          "Achyut S Godbole Atul Kahate"
        ],
        "publisher": "Tata McGraw-Hill Education",
        "publishedDate": "2002-12-01",
        "industryIdentifiers": [
          {
            "type": "ISBN_10",
            "identifier": "007047298X"
          },
          {
            "type": "ISBN_13",
            "identifier": "9780070472983"
          }
        ],
        "readingModes": {
          "text": false,
          "image": true
        },
        "pageCount": 599,
        "printType": "BOOK",
        "categories": [
          "Computer networks"
        ],
        "averageRating": 3.5,
        "ratingsCount": 5,
        "maturityRating": "NOT_MATURE",
        "allowAnonLogging": false,
        "contentVersion": "0.5.2.0.preview.1",
        "panelizationSummary": {
          "containsEpubBubbles": false,
          "containsImageBubbles": false
        },
        "imageLinks": {
          "smallThumbnail": "http://books.google.com/books/content?id=bIXEQX8svOoC&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
          "thumbnail": "http://books.google.com/books/content?id=bIXEQX8svOoC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
        },
        "language": "en",
        "previewLink": "http://books.google.ca/books?id=bIXEQX8svOoC&pg=PA458&dq=bookname&hl=&cd=3&source=gbs_api",
        "infoLink": "http://books.google.ca/books?id=bIXEQX8svOoC&dq=bookname&hl=&source=gbs_api",
        "canonicalVolumeLink": "https://books.google.com/books/about/Web_Technologies_Tcp_ip_to_Internet_Appl.html?hl=&id=bIXEQX8svOoC"
      },
      "saleInfo": {
        "country": "CA",
        "saleability": "NOT_FOR_SALE",
        "isEbook": false
      },
      "accessInfo": {
        "country": "CA",
        "viewability": "PARTIAL",
        "embeddable": true,
        "publicDomain": false,
        "textToSpeechPermission": "ALLOWED",
        "epub": {
          "isAvailable": false
        },
        "pdf": {
          "isAvailable": false
        },
        "webReaderLink": "http://play.google.com/books/reader?id=bIXEQX8svOoC&hl=&printsec=frontcover&source=gbs_api",
        "accessViewStatus": "SAMPLE",
        "quoteSharingAllowed": false
      },
      "searchInfo": {
        "textSnippet": "&lt; \u003cb\u003eBOOKNAME\u003c/b\u003e &gt; A preview of Active Server Pages &lt; / \u003cb\u003eBOOKNAME\u003c/b\u003e &gt; This tag is self - describing as well : in fact , the whole purpose of XML is to create self - describing documents . This tag indicates that we are now describing the name of&nbsp;..."
      }
    },
    {
      "kind": "books#volume",
      "id": "Fq3FAgAAQBAJ",
      "etag": "V1SXOk7JXUQ",
      "selfLink": "https://www.googleapis.com/books/v1/volumes/Fq3FAgAAQBAJ",
      "volumeInfo": {
        "title": "Java Programming Interviews Exposed",
        "authors": [
          "Noel Markham"
        ],
        "publisher": "John Wiley & Sons",
        "publishedDate": "2014-01-30",
        "description": "If you are a skilled Java programmer but are concerned about theJava coding interview process, this real-world guide can help youland your next position Java is a popular and powerful language that is a virtualrequirement for businesses making use of IT in their dailyoperations. For Java programmers, this reality offers job securityand a wealth of employment opportunities. But that perfect Javacoding job won't be available if you can't ace the interview. Ifyou are a Java programmer concerned about interviewing, JavaProgramming Interviews Exposed is a great resource to preparefor your next opportunity. Author Noel Markham is both anexperienced Java developer and interviewer, and has loaded his bookwith real examples from interviews he has conducted. Review over 150 real-world Java interview questions you arelikely to encounter Prepare for personality-based interviews as well as highlytechnical interviews Explore related topics, such as middleware frameworks andserver technologies Make use of chapters individually for topic-specific help Use the appendix for tips on Scala and Groovy, two otherlanguages that run on JVMs Veterans of the IT employment space know that interviewing for aJava programming position isn't as simple as sitting down andanswering questions. The technical coding portion of the interviewcan be akin to a difficult puzzle or an interrogation. With JavaProgramming Interviews Exposed, skilled Java coders can preparethemselves for this daunting process and better arm themselves withthe knowledge and interviewing skills necessary to succeed.",
        "industryIdentifiers": [
          {
            "type": "ISBN_13",
            "identifier": "9781118722886"
          },
          {
            "type": "ISBN_10",
            "identifier": "1118722884"
          }
        ],
        "readingModes": {
          "text": true,
          "image": true
        },
        "pageCount": 384,
        "printType": "BOOK",
        "categories": [
          "Computers"
        ],
        "maturityRating": "NOT_MATURE",
        "allowAnonLogging": true,
        "contentVersion": "0.4.4.0.preview.3",
        "panelizationSummary": {
          "containsEpubBubbles": false,
          "containsImageBubbles": false
        },
        "imageLinks": {
          "smallThumbnail": "http://books.google.com/books/content?id=Fq3FAgAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
          "thumbnail": "http://books.google.com/books/content?id=Fq3FAgAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
        },
        "language": "en",
        "previewLink": "http://books.google.ca/books?id=Fq3FAgAAQBAJ&pg=PA54&dq=bookname&hl=&cd=4&source=gbs_api",
        "infoLink": "https://play.google.com/store/books/details?id=Fq3FAgAAQBAJ&source=gbs_api",
        "canonicalVolumeLink": "https://play.google.com/store/books/details?id=Fq3FAgAAQBAJ"
      },
      "saleInfo": {
        "country": "CA",
        "saleability": "FOR_SALE",
        "isEbook": true,
        "listPrice": {
          "amount": 31.99,
          "currencyCode": "CAD"
        },
        "retailPrice": {
          "amount": 31.99,
          "currencyCode": "CAD"
        },
        "buyLink": "https://play.google.com/store/books/details?id=Fq3FAgAAQBAJ&rdid=book-Fq3FAgAAQBAJ&rdot=1&source=gbs_api",
        "offers": [
          {
            "finskyOfferType": 1,
            "listPrice": {
              "amountInMicros": 31990000,
              "currencyCode": "CAD"
            },
            "retailPrice": {
              "amountInMicros": 31990000,
              "currencyCode": "CAD"
            },
            "giftable": true
          }
        ]
      },
      "accessInfo": {
        "country": "CA",
        "viewability": "PARTIAL",
        "embeddable": true,
        "publicDomain": false,
        "textToSpeechPermission": "ALLOWED",
        "epub": {
          "isAvailable": true,
          "acsTokenLink": "http://books.google.ca/books/download/Java_Programming_Interviews_Exposed-sample-epub.acsm?id=Fq3FAgAAQBAJ&format=epub&output=acs4_fulfillment_token&dl_type=sample&source=gbs_api"
        },
        "pdf": {
          "isAvailable": true,
          "acsTokenLink": "http://books.google.ca/books/download/Java_Programming_Interviews_Exposed-sample-pdf.acsm?id=Fq3FAgAAQBAJ&format=pdf&output=acs4_fulfillment_token&dl_type=sample&source=gbs_api"
        },
        "webReaderLink": "http://play.google.com/books/reader?id=Fq3FAgAAQBAJ&hl=&printsec=frontcover&source=gbs_api",
        "accessViewStatus": "SAMPLE",
        "quoteSharingAllowed": false
      },
      "searchInfo": {
        "textSnippet": "FICTION; private String \u003cb\u003ebookName\u003c/b\u003e; public Builder withBookType(final BookType bookType) { this.bookType = bookType; return this; } public Builder withBookName(final String \u003cb\u003ebookName\u003c/b\u003e) { this.\u003cb\u003ebookName\u003c/b\u003e = \u003cb\u003ebookName\u003c/b\u003e; return this; }&nbsp;..."
      }
    },
    {
      "kind": "books#volume",
      "id": "Z-JVDwAAQBAJ",
      "etag": "Z7+175gUKaQ",
      "selfLink": "https://www.googleapis.com/books/v1/volumes/Z-JVDwAAQBAJ",
      "volumeInfo": {
        "title": "Web Coding & Development All-in-One For Dummies",
        "authors": [
          "Paul McFedries"
        ],
        "publisher": "John Wiley & Sons",
        "publishedDate": "2018-04-16",
        "description": "Speak the languages that power the web With more high-paying web development jobs opening every day, people with coding and web/app building skills are having no problems finding employment. If you’re a would-be developer looking to gain the know-how to build the interfaces, databases, and other features that run modern websites, web apps, and mobile apps, look no further. Web Coding & Development All-in-One For Dummies is your go-to interpreter for speaking the languages that handle those tasks. Get started with a refresher on the rules of coding before diving into the languages that build interfaces, add interactivity to the web, or store and deliver data to sites. When you're ready, jump into guidance on how to put it all together to build a site or create an app. Get the lowdown on coding basics Review HTML and CSS Make sense of JavaScript, jQuery, PHP, and MySQL Create code for web and mobile apps There’s a whole world of opportunity out there for developers—and this fast-track boot camp is here to help you acquire the skills you need to take your career to new heights!",
        "industryIdentifiers": [
          {
            "type": "ISBN_13",
            "identifier": "9781119473794"
          },
          {
            "type": "ISBN_10",
            "identifier": "1119473799"
          }
        ],
        "readingModes": {
          "text": true,
          "image": true
        },
        "pageCount": 848,
        "printType": "BOOK",
        "categories": [
          "Computers"
        ],
        "maturityRating": "NOT_MATURE",
        "allowAnonLogging": true,
        "contentVersion": "preview-1.0.0",
        "panelizationSummary": {
          "containsEpubBubbles": false,
          "containsImageBubbles": false
        },
        "imageLinks": {
          "smallThumbnail": "http://books.google.com/books/content?id=Z-JVDwAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
          "thumbnail": "http://books.google.com/books/content?id=Z-JVDwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
        },
        "language": "en",
        "previewLink": "http://books.google.ca/books?id=Z-JVDwAAQBAJ&pg=PT359&dq=bookname&hl=&cd=5&source=gbs_api",
        "infoLink": "https://play.google.com/store/books/details?id=Z-JVDwAAQBAJ&source=gbs_api",
        "canonicalVolumeLink": "https://play.google.com/store/books/details?id=Z-JVDwAAQBAJ"
      },
      "saleInfo": {
        "country": "CA",
        "saleability": "FOR_SALE",
        "isEbook": true,
        "listPrice": {
          "amount": 31.99,
          "currencyCode": "CAD"
        },
        "retailPrice": {
          "amount": 31.99,
          "currencyCode": "CAD"
        },
        "buyLink": "https://play.google.com/store/books/details?id=Z-JVDwAAQBAJ&rdid=book-Z-JVDwAAQBAJ&rdot=1&source=gbs_api",
        "offers": [
          {
            "finskyOfferType": 1,
            "listPrice": {
              "amountInMicros": 31990000,
              "currencyCode": "CAD"
            },
            "retailPrice": {
              "amountInMicros": 31990000,
              "currencyCode": "CAD"
            },
            "giftable": true
          }
        ]
      },
      "accessInfo": {
        "country": "CA",
        "viewability": "PARTIAL",
        "embeddable": true,
        "publicDomain": false,
        "textToSpeechPermission": "ALLOWED",
        "epub": {
          "isAvailable": true,
          "acsTokenLink": "http://books.google.ca/books/download/Web_Coding_Development_All_in_One_For_Du-sample-epub.acsm?id=Z-JVDwAAQBAJ&format=epub&output=acs4_fulfillment_token&dl_type=sample&source=gbs_api"
        },
        "pdf": {
          "isAvailable": true,
          "acsTokenLink": "http://books.google.ca/books/download/Web_Coding_Development_All_in_One_For_Du-sample-pdf.acsm?id=Z-JVDwAAQBAJ&format=pdf&output=acs4_fulfillment_token&dl_type=sample&source=gbs_api"
        },
        "webReaderLink": "http://play.google.com/books/reader?id=Z-JVDwAAQBAJ&hl=&printsec=frontcover&source=gbs_api",
        "accessViewStatus": "SAMPLE",
        "quoteSharingAllowed": false
      },
      "searchInfo": {
        "textSnippet": "... \u003cb\u003ebookName\u003c/b\u003e = &quot;Web Coding and Development for Dummies&quot;; var str = &quot;\\&quot;C\\&quot; is at index &quot; + \u003cb\u003ebookName\u003c/b\u003e.indexOf(&quot;C&quot;) + &quot;&lt;br&gt;&quot;; str += &quot;\\&quot;v\\&quot; is at index &quot; + \u003cb\u003ebookName\u003c/b\u003e.indexOf(&quot;v&quot;) + &quot;&lt;br&gt;&quot;; str += &quot;The first space is at index &quot; + \u003cb\u003ebookName\u003c/b\u003e."
      }
    },
    {
      "kind": "books#volume",
      "id": "MTne6h_chwEC",
      "etag": "BEwokL8TXOU",
      "selfLink": "https://www.googleapis.com/books/v1/volumes/MTne6h_chwEC",
      "volumeInfo": {
        "title": "Programming ASP.NET",
        "subtitle": "Building Web Applications and Services with ASP.NET 2.0",
        "authors": [
          "Jesse Liberty",
          "Dan Hurwitz"
        ],
        "publisher": "\"O'Reilly Media, Inc.\"",
        "publishedDate": "2005-10-26",
        "description": "O'Reilly has once again updated its bestselling tutorial on ASP.NET, the world's leading web development tool from Microsoft. In Programming ASP.NET, Third Edition, authors Jesse Liberty and Dan Hurwitz give you the lowdown on the technology's latest version, ASP.NET 2.0, as well as Visual Studio 2005. Among the most significant improvements to ASP.NET 2.0 are new server controls and services that make you dramatically more productive. In fact, when compared to its predecessor, ASP.NET 2.0 reduces the amount of code you have to write by about 75%. Creating interactive web applications has never been easier-but that still doesn't mean it's hassle-free! The difficulty in ASP.NET 2.0 is that it's so complete and flexible that there are many pieces that must be woven together to build a robust, scalable, and efficient application. Fortunately, Programming ASP.NET, Third Edition is on the case, dispensing all the information you need to be effective with this dynamic tool. For starters, the book features a comprehensive tutorial on Web Forms, the user interface that gives web applications their look and feel. It then offers detailed explanations of all new controls, including web server controls, HTML controls, and custom controls. Used properly, these controls are able to take care of nearly all the foundation work-security, data access, layout, etc.-that you would normally have to write yourself. Free of these burdensome tasks, you can instead focus on your specific application. Other new material found in this updated edition even shows you how to create ASP.NET 2.0 pages for mobile devices. With Programming ASP.NET, Third Edition at your side, there's virtually no end to the programming possibilities.",
        "industryIdentifiers": [
          {
            "type": "ISBN_13",
            "identifier": "9780596552732"
          },
          {
            "type": "ISBN_10",
            "identifier": "0596552734"
          }
        ],
        "readingModes": {
          "text": true,
          "image": true
        },
        "pageCount": 960,
        "printType": "BOOK",
        "categories": [
          "Computers"
        ],
        "averageRating": 4.5,
        "ratingsCount": 15,
        "maturityRating": "NOT_MATURE",
        "allowAnonLogging": true,
        "contentVersion": "0.8.4.0.preview.3",
        "panelizationSummary": {
          "containsEpubBubbles": false,
          "containsImageBubbles": false
        },
        "imageLinks": {
          "smallThumbnail": "http://books.google.com/books/content?id=MTne6h_chwEC&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
          "thumbnail": "http://books.google.com/books/content?id=MTne6h_chwEC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
        },
        "language": "en",
        "previewLink": "http://books.google.ca/books?id=MTne6h_chwEC&pg=PT474&dq=bookname&hl=&cd=6&source=gbs_api",
        "infoLink": "https://play.google.com/store/books/details?id=MTne6h_chwEC&source=gbs_api",
        "canonicalVolumeLink": "https://play.google.com/store/books/details?id=MTne6h_chwEC"
      },
      "saleInfo": {
        "country": "CA",
        "saleability": "FOR_SALE",
        "isEbook": true,
        "listPrice": {
          "amount": 44.99,
          "currencyCode": "CAD"
        },
        "retailPrice": {
          "amount": 44.99,
          "currencyCode": "CAD"
        },
        "buyLink": "https://play.google.com/store/books/details?id=MTne6h_chwEC&rdid=book-MTne6h_chwEC&rdot=1&source=gbs_api",
        "offers": [
          {
            "finskyOfferType": 1,
            "listPrice": {
              "amountInMicros": 44990000,
              "currencyCode": "CAD"
            },
            "retailPrice": {
              "amountInMicros": 44990000,
              "currencyCode": "CAD"
            },
            "giftable": true
          }
        ]
      },
      "accessInfo": {
        "country": "CA",
        "viewability": "PARTIAL",
        "embeddable": true,
        "publicDomain": false,
        "textToSpeechPermission": "ALLOWED",
        "epub": {
          "isAvailable": true
        },
        "pdf": {
          "isAvailable": true
        },
        "webReaderLink": "http://play.google.com/books/reader?id=MTne6h_chwEC&hl=&printsec=frontcover&source=gbs_api",
        "accessViewStatus": "SAMPLE",
        "quoteSharingAllowed": false
      },
      "searchInfo": {
        "textSnippet": "BookCounter.aspx (continued) \u003cb\u003eBookName\u003c/b\u003e=&quot;Programming Visual Basic 2005&quot; /&gt; &lt;OReilly:BookCounter ID=&quot;Bookcounter4&quot; Runat=&quot;server&quot; \u003cb\u003eBookName\u003c/b\u003e=&quot;Visual C#: A Developers Notebook&quot; /&gt; &lt;OReilly:BookCounter ID=&quot;BookCounter5&quot; Runat=&quot;server&quot;&nbsp;..."
      }
    },
    {
      "kind": "books#volume",
      "id": "Y7EitNiYvqMC",
      "etag": "zrDRIO6SPp4",
      "selfLink": "https://www.googleapis.com/books/v1/volumes/Y7EitNiYvqMC",
      "volumeInfo": {
        "title": "Visual C# 2005: A Developer's Notebook",
        "authors": [
          "Jesse Liberty"
        ],
        "publisher": "\"O'Reilly Media, Inc.\"",
        "publishedDate": "2005-04-25",
        "description": "In the three years since Microsoft made C# available, there have been lots of tweaks to the language. That's because C# is not only essential for making .NET work, it's a big way for Microsoft to attract millions of Java, C and C++ developers to the platform. And C# has definitely made some inroads. Because of its popularity among developers, the language received standardization from ECMA International, making it possible to port C# applications to other platforms. To bolster its appeal, C# 2.0 has undergone some key changes as part of Visual Studio 2005 that will make development with .NET quicker and easier.That's precisely what Visual C# 2005: A Developer's Notebook allows you to do. There are some great new features in C# and this unique \"all lab, no lecture\" guide covers them all with 50 hands-on projects. Each project explores a new feature, with emphasis on changes that increase productivity, simplify programming tasks, and add functionality to applications.C#'s component-based design combines the productivity of Microsoft's popular Visual Basic with the raw power of C++ for web-based applications. Many reviewers note a similarity between C# and Java--in fact, a new feature that took the Java development team five years to incorporate into Java is now available in C# 2.0. Called \"generics\", this feature enables developers to reuse and customize their existing code, so they can dramatically cut down the time it takes to develop new applications.Visual C# 2005: A Developer's Notebook is full of no-nonsense code without the usual page-filling commentary. You'll find suggestions for further experimentation, links to on-line documentation, plus practical notes and warnings. The book also tells developers how to acquire, install and configure Visual Studio 2005. Are you a coder to the core? Learn what C# 2.0 can do for you now.",
        "industryIdentifiers": [
          {
            "type": "ISBN_13",
            "identifier": "9780596552947"
          },
          {
            "type": "ISBN_10",
            "identifier": "0596552947"
          }
        ],
        "readingModes": {
          "text": true,
          "image": true
        },
        "pageCount": 240,
        "printType": "BOOK",
        "categories": [
          "Computers"
        ],
        "averageRating": 3.5,
        "ratingsCount": 4,
        "maturityRating": "NOT_MATURE",
        "allowAnonLogging": false,
        "contentVersion": "0.3.2.0.preview.3",
        "panelizationSummary": {
          "containsEpubBubbles": false,
          "containsImageBubbles": false
        },
        "imageLinks": {
          "smallThumbnail": "http://books.google.com/books/content?id=Y7EitNiYvqMC&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
          "thumbnail": "http://books.google.com/books/content?id=Y7EitNiYvqMC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
        },
        "language": "en",
        "previewLink": "http://books.google.ca/books?id=Y7EitNiYvqMC&pg=PA204&dq=bookname&hl=&cd=7&source=gbs_api",
        "infoLink": "https://play.google.com/store/books/details?id=Y7EitNiYvqMC&source=gbs_api",
        "canonicalVolumeLink": "https://play.google.com/store/books/details?id=Y7EitNiYvqMC"
      },
      "saleInfo": {
        "country": "CA",
        "saleability": "FOR_SALE",
        "isEbook": true,
        "listPrice": {
          "amount": 26.99,
          "currencyCode": "CAD"
        },
        "retailPrice": {
          "amount": 26.99,
          "currencyCode": "CAD"
        },
        "buyLink": "https://play.google.com/store/books/details?id=Y7EitNiYvqMC&rdid=book-Y7EitNiYvqMC&rdot=1&source=gbs_api",
        "offers": [
          {
            "finskyOfferType": 1,
            "listPrice": {
              "amountInMicros": 26990000,
              "currencyCode": "CAD"
            },
            "retailPrice": {
              "amountInMicros": 26990000,
              "currencyCode": "CAD"
            },
            "giftable": true
          }
        ]
      },
      "accessInfo": {
        "country": "CA",
        "viewability": "PARTIAL",
        "embeddable": true,
        "publicDomain": false,
        "textToSpeechPermission": "ALLOWED",
        "epub": {
          "isAvailable": true
        },
        "pdf": {
          "isAvailable": true
        },
        "webReaderLink": "http://play.google.com/books/reader?id=Y7EitNiYvqMC&hl=&printsec=frontcover&source=gbs_api",
        "accessViewStatus": "SAMPLE",
        "quoteSharingAllowed": false
      },
      "searchInfo": {
        "textSnippet": "&lt;Books&gt; &lt;book&gt; &lt;\u003cb\u003eBookName\u003c/b\u003e&gt;Programming C#&lt;/\u003cb\u003eBookName\u003c/b\u003e&gt; &lt;Author&gt;Jesse Liberty&lt;/Author&gt; XPathDocument &lt;Publisher&gt;OReilly Media&lt;/Publisher&gt; &lt;/book&gt; offers a flexible, fast, and &lt;book&gt; efficient mechanism for loading and binding XML documents."
      }
    },
    {
      "kind": "books#volume",
      "id": "lFMkjwr3L0EC",
      "etag": "5HCkxUUV5l8",
      "selfLink": "https://www.googleapis.com/books/v1/volumes/lFMkjwr3L0EC",
      "volumeInfo": {
        "title": "Programming ASP.NET 3.5",
        "subtitle": "Building Web Applications",
        "authors": [
          "Jesse Liberty",
          "Dan Maharry",
          "Dan Hurwitz"
        ],
        "publisher": "\"O'Reilly Media, Inc.\"",
        "publishedDate": "2008-10-23",
        "description": "With Programming ASP.NET 3.5, you'll quickly learn to create state-of-the-art applications using Microsoft's popular web development technology and Visual Studio 2008. This updated bestseller provides comprehensive and easy-to-understand information to help you use several .NET 3.5 technologies for faster development and better web application performance-including ASP.NET AJAX for interactive user interfaces, LINQ for data access, and Windows Communication Foundation (WCF) for web services. Programming ASP.NET 3.5 includes examples and sample code that let you explore development with ASP.NET in more depth. With this book, you will: Learn about AJAX and ASP.NET server controls included with Visual Studio 2008 Discover how to use the DataSource and data-bound controls in ADO.NET Use the new LINQ API and learn how to make use of it within ASP.NET pages Create a uniform look and feel throughout your application with Master Pages Use navigation controls to build site maps, menus, and breadcrumbs quickly and easily Build and use various web services with WCF Detect errors during development and handle them in your production code Learn how to configure and deploy your website Written by Microsoft technology experts Jesse Liberty, Dan Hurwitz, and Dan Maharry, Programming ASP.NET 3.5 is the best book for learning how to build dynamic, interactive web applications using Microsoft's latest technologies.",
        "industryIdentifiers": [
          {
            "type": "ISBN_10",
            "identifier": "0596554079"
          },
          {
            "type": "ISBN_13",
            "identifier": "9780596554071"
          }
        ],
        "readingModes": {
          "text": true,
          "image": true
        },
        "pageCount": 1168,
        "printType": "BOOK",
        "categories": [
          "Computers"
        ],
        "maturityRating": "NOT_MATURE",
        "allowAnonLogging": true,
        "contentVersion": "0.6.6.0.preview.3",
        "panelizationSummary": {
          "containsEpubBubbles": false,
          "containsImageBubbles": false
        },
        "imageLinks": {
          "smallThumbnail": "http://books.google.com/books/content?id=lFMkjwr3L0EC&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
          "thumbnail": "http://books.google.com/books/content?id=lFMkjwr3L0EC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
        },
        "language": "en",
        "previewLink": "http://books.google.ca/books?id=lFMkjwr3L0EC&pg=PA782&dq=bookname&hl=&cd=8&source=gbs_api",
        "infoLink": "https://play.google.com/store/books/details?id=lFMkjwr3L0EC&source=gbs_api",
        "canonicalVolumeLink": "https://play.google.com/store/books/details?id=lFMkjwr3L0EC"
      },
      "saleInfo": {
        "country": "CA",
        "saleability": "FOR_SALE",
        "isEbook": true,
        "listPrice": {
          "amount": 53.99,
          "currencyCode": "CAD"
        },
        "retailPrice": {
          "amount": 53.99,
          "currencyCode": "CAD"
        },
        "buyLink": "https://play.google.com/store/books/details?id=lFMkjwr3L0EC&rdid=book-lFMkjwr3L0EC&rdot=1&source=gbs_api",
        "offers": [
          {
            "finskyOfferType": 1,
            "listPrice": {
              "amountInMicros": 53990000,
              "currencyCode": "CAD"
            },
            "retailPrice": {
              "amountInMicros": 53990000,
              "currencyCode": "CAD"
            },
            "giftable": true
          }
        ]
      },
      "accessInfo": {
        "country": "CA",
        "viewability": "PARTIAL",
        "embeddable": true,
        "publicDomain": false,
        "textToSpeechPermission": "ALLOWED",
        "epub": {
          "isAvailable": true
        },
        "pdf": {
          "isAvailable": true
        },
        "webReaderLink": "http://play.google.com/books/reader?id=lFMkjwr3L0EC&hl=&printsec=frontcover&source=gbs_api",
        "accessViewStatus": "SAMPLE",
        "quoteSharingAllowed": false
      },
      "searchInfo": {
        "textSnippet": "BookCounter.aspx (continued) &lt;OReilly:BookCounter ID=&quot;Bookcounter4&quot; Runat=&quot;server&quot; \u003cb\u003eBookName\u003c/b\u003e=&quot;Visual C#: A Developers Notebook&quot; /&gt; &lt;OReilly:BookCounter ID=&quot;Bookcounter5&quot; Runat=&quot;server&quot; \u003cb\u003eBookName\u003c/b\u003e=&quot;Teach Yourself C++ 21 Days&quot;&nbsp;..."
      }
    },
    {
      "kind": "books#volume",
      "id": "kiqBaxfK4LEC",
      "etag": "LuKruWM3Vd4",
      "selfLink": "https://www.googleapis.com/books/v1/volumes/kiqBaxfK4LEC",
      "volumeInfo": {
        "title": "Hibernate Recipes",
        "subtitle": "A Problem-Solution Approach",
        "authors": [
          "Gary Mak",
          "Srinivas Guruzu"
        ],
        "publisher": "Apress",
        "publishedDate": "2010-08-12",
        "description": "Hibernate continues to be the most popular out-of-the-box framework solution for Java Persistence and data/database accessibility techniques and patterns. It is used for e-commerce–based web applications as well as heavy-duty transactional systems for the enterprise. Gary Mak, the author of the best-selling Spring Recipes, now brings you Hibernate Recipes. This book contains a collection of code recipes and templates for learning and building Hibernate solutions for you and your clients. This book is your pragmatic day-to-day reference and guide for doing all things involving Hibernate. There are many books focused on learning Hibernate, but this book takes you further and shows how you can apply it practically in your daily work.",
        "industryIdentifiers": [
          {
            "type": "ISBN_13",
            "identifier": "9781430227977"
          },
          {
            "type": "ISBN_10",
            "identifier": "1430227974"
          }
        ],
        "readingModes": {
          "text": true,
          "image": true
        },
        "pageCount": 312,
        "printType": "BOOK",
        "categories": [
          "Computers"
        ],
        "maturityRating": "NOT_MATURE",
        "allowAnonLogging": false,
        "contentVersion": "1.6.4.0.preview.3",
        "panelizationSummary": {
          "containsEpubBubbles": false,
          "containsImageBubbles": false
        },
        "imageLinks": {
          "smallThumbnail": "http://books.google.com/books/content?id=kiqBaxfK4LEC&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
          "thumbnail": "http://books.google.com/books/content?id=kiqBaxfK4LEC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
        },
        "language": "en",
        "previewLink": "http://books.google.ca/books?id=kiqBaxfK4LEC&pg=PA20&dq=bookname&hl=&cd=9&source=gbs_api",
        "infoLink": "https://play.google.com/store/books/details?id=kiqBaxfK4LEC&source=gbs_api",
        "canonicalVolumeLink": "https://play.google.com/store/books/details?id=kiqBaxfK4LEC"
      },
      "saleInfo": {
        "country": "CA",
        "saleability": "FOR_SALE",
        "isEbook": true,
        "listPrice": {
          "amount": 61.15,
          "currencyCode": "CAD"
        },
        "retailPrice": {
          "amount": 48.92,
          "currencyCode": "CAD"
        },
        "buyLink": "https://play.google.com/store/books/details?id=kiqBaxfK4LEC&rdid=book-kiqBaxfK4LEC&rdot=1&source=gbs_api",
        "offers": [
          {
            "finskyOfferType": 1,
            "listPrice": {
              "amountInMicros": 61150000,
              "currencyCode": "CAD"
            },
            "retailPrice": {
              "amountInMicros": 48920000,
              "currencyCode": "CAD"
            },
            "giftable": true
          }
        ]
      },
      "accessInfo": {
        "country": "CA",
        "viewability": "PARTIAL",
        "embeddable": true,
        "publicDomain": false,
        "textToSpeechPermission": "ALLOWED",
        "epub": {
          "isAvailable": true,
          "acsTokenLink": "http://books.google.ca/books/download/Hibernate_Recipes-sample-epub.acsm?id=kiqBaxfK4LEC&format=epub&output=acs4_fulfillment_token&dl_type=sample&source=gbs_api"
        },
        "pdf": {
          "isAvailable": true,
          "acsTokenLink": "http://books.google.ca/books/download/Hibernate_Recipes-sample-pdf.acsm?id=kiqBaxfK4LEC&format=pdf&output=acs4_fulfillment_token&dl_type=sample&source=gbs_api"
        },
        "webReaderLink": "http://play.google.com/books/reader?id=kiqBaxfK4LEC&hl=&printsec=frontcover&source=gbs_api",
        "accessViewStatus": "SAMPLE",
        "quoteSharingAllowed": false
      },
      "searchInfo": {
        "textSnippet": "... (name=&quot;book_Name&quot;) String \u003cb\u003ebookName\u003c/b\u003e; ... the \u003cb\u003ebookName\u003c/b\u003e */ public String getBookName() { return \u003cb\u003ebookName\u003c/b\u003e; } /** * @param \u003cb\u003ebookName\u003c/b\u003e the \u003cb\u003ebookName\u003c/b\u003e to set */ public void setBookName(String \u003cb\u003ebookName\u003c/b\u003e) { this.\u003cb\u003ebookName\u003c/b\u003e = \u003cb\u003ebookName\u003c/b\u003e&nbsp;..."
      }
    },
    {
      "kind": "books#volume",
      "id": "IVEWcAZzbdoC",
      "etag": "LhXMwGaKptM",
      "selfLink": "https://www.googleapis.com/books/v1/volumes/IVEWcAZzbdoC",
      "volumeInfo": {
        "title": "Foundation XML and E4X for Flash and Flex",
        "authors": [
          "Sas Jacobs"
        ],
        "publisher": "Apress",
        "publishedDate": "2009-02-21",
        "description": "XML is the lingua franca of the Web. All designers and developers working in a web environment need a sound understanding of XML and its role in application development. Many software packages and organizations allow for the exchange of data using an XML format. Web services and RSS feeds are now commonplace. For those working with Flash and Flex, a thorough understanding of XML is particularly important. XML documents are one option for the data provided to SWF applications. Flash and Flex can load, display, and modify XML content. These applications can also send XML content to other applications for updating or for use in different situations. ActionScript 3.0 introduced some fundamental changes to the way in which Flash and Flex applications work with XML. One significant change is that XML is now a native data type. ActionScript 3.0 also introduced new classes and a different framework for working with external documents. These changes are based on the E4X ECMAScript standard, and they streamline and simplify the process for working with XML in Flash and Flex. In Foundation XML and E4X for Flash and Flex, Sas Jacobs gives you an introduction to XML and E4X. She explores the XML and XMLList classes and explains E4X expressions, providing examples for both Flash and Flex. In addition to explaining how to incorporate XML documents in Shockwave Flash applications, Sas shows you approaches specific to Flash and Flex and explores real-world usage. The book finishes with two case studies. In the first, you will learn how to consume and display information and images from Flickr using Flash. In the second, you will work with Adobe Kuler in Flex. Whether you are a designer or developer, this book will help you work with XML and make the transition from ActionScript 2.0 to ActionScript 3.0. It will also provide you with an excellent grounding if you are new to Flash and Flex.",
        "industryIdentifiers": [
          {
            "type": "ISBN_13",
            "identifier": "9781430216353"
          },
          {
            "type": "ISBN_10",
            "identifier": "1430216352"
          }
        ],
        "readingModes": {
          "text": false,
          "image": true
        },
        "pageCount": 520,
        "printType": "BOOK",
        "categories": [
          "Computers"
        ],
        "maturityRating": "NOT_MATURE",
        "allowAnonLogging": false,
        "contentVersion": "1.2.1.0.preview.1",
        "panelizationSummary": {
          "containsEpubBubbles": false,
          "containsImageBubbles": false
        },
        "imageLinks": {
          "smallThumbnail": "http://books.google.com/books/content?id=IVEWcAZzbdoC&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
          "thumbnail": "http://books.google.com/books/content?id=IVEWcAZzbdoC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
        },
        "language": "en",
        "previewLink": "http://books.google.ca/books?id=IVEWcAZzbdoC&pg=PA106&dq=bookname&hl=&cd=10&source=gbs_api",
        "infoLink": "https://play.google.com/store/books/details?id=IVEWcAZzbdoC&source=gbs_api",
        "canonicalVolumeLink": "https://play.google.com/store/books/details?id=IVEWcAZzbdoC"
      },
      "saleInfo": {
        "country": "CA",
        "saleability": "FOR_SALE",
        "isEbook": true,
        "listPrice": {
          "amount": 47.98,
          "currencyCode": "CAD"
        },
        "retailPrice": {
          "amount": 37.66,
          "currencyCode": "CAD"
        },
        "buyLink": "https://play.google.com/store/books/details?id=IVEWcAZzbdoC&rdid=book-IVEWcAZzbdoC&rdot=1&source=gbs_api",
        "offers": [
          {
            "finskyOfferType": 1,
            "listPrice": {
              "amountInMicros": 47980000,
              "currencyCode": "CAD"
            },
            "retailPrice": {
              "amountInMicros": 37660000,
              "currencyCode": "CAD"
            },
            "giftable": true
          }
        ]
      },
      "accessInfo": {
        "country": "CA",
        "viewability": "PARTIAL",
        "embeddable": true,
        "publicDomain": false,
        "textToSpeechPermission": "ALLOWED",
        "epub": {
          "isAvailable": false
        },
        "pdf": {
          "isAvailable": true,
          "acsTokenLink": "http://books.google.ca/books/download/Foundation_XML_and_E4X_for_Flash_and_Fle-sample-pdf.acsm?id=IVEWcAZzbdoC&format=pdf&output=acs4_fulfillment_token&dl_type=sample&source=gbs_api"
        },
        "webReaderLink": "http://play.google.com/books/reader?id=IVEWcAZzbdoC&hl=&printsec=frontcover&source=gbs_api",
        "accessViewStatus": "SAMPLE",
        "quoteSharingAllowed": false
      },
      "searchInfo": {
        "textSnippet": "LastName&gt; &lt;books) &lt;book bookID=&quot;1&quot;&gt; &lt;\u003cb\u003ebookName\u003c/b\u003e&gt;Shopping for profit and pleasurex/\u003cb\u003ebookName\u003c/b\u003e&gt; &lt;bookPublish Yearx 2002.&lt;/bookPublish Wear&gt; &lt;bookCost»14.99.&lt;/bookCost» &lt;/bookx &lt;book ID=&quot;4&quot;&gt; &lt;\u003cb\u003ebookName\u003c/b\u003e&gt;Fishing tips&amp;/\u003cb\u003ebookName\u003c/b\u003e&gt; &lt;bookPublish Yearx&nbsp;..."
      }
    }
  ];
}
