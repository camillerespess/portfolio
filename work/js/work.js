let clips = document.querySelectorAll('.clips');

clips.forEach(function(item) {

  item.onclick = (e) => {

    let filename = item.src.split('/').pop().replace('.png', '');

    switch (filename) {
      // if filename is this ...
      case 'candidates':
        // open this url
        window.open("http://projects.chalkbeat.org/primary-2020/index.html#/candidates", "_blank");
        break;
      case 'census':
        // open this url
        window.open("https://chalkbeat.org/posts/us/2019/06/27/census-supreme-court-schools-decision/", "_blank");
        break;
      case 'parkland':
        // open this url
        window.open("https://sinceparkland.org/", "_blank");
        break;
      case 'rft':
        // open this url
        window.open("https://www.riverfronttimes.com/stlouis/st-louis-desegregation-transfer-program-is-winding-down-yet-no-one-has-any-idea-what-might-come-next/Content?oid=23305900", "_blank");
        break;
      case 'sanctuary':
          // open this url
          window.open("https://www.riverfronttimes.com/newsblog/2018/05/29/us-rep-william-lacy-clay-visits-alex-garcia-honduran-immigrant-in-sanctuary");
          break;
      case 'hawthorne':
          // open this url
          window.open("https://www.wuft.org/news/2018/05/02/this-isnt-the-first-time-hawthornes-only-school-has-faced-closure", "_blank");
          break;
      case 'alligator':
              // open this url
              window.open("https://www.alligator.org/news/on-a-quiet-campus-students-pledge-good-deeds/article_40737780-b560-11e7-8377-f30e2ca449c7.html", "_blank");
              break;
      case 'cops':
            // open this url
            window.open("https://www.wuft.org/news/2018/05/07/low-pay-poor-morale-and-a-contract-dispute-leave-gpd-with-staffing-shortages/");
            break;

    case 'books':
        // open this url
        window.open("http://camillerespess.com/booksthatbuiltus/");
        break;

    case 'musiced':
            // open this url
            window.open("http://camillerespess.com/musiceducation/");
            break;

    case 'clairo':
                    // open this url
                    window.open("http://camillerespess.com/music-sampler/");
                    break;

      case 'projectmakeover':
              // open this url
              window.open("http://www.projectmakeoveruf.org/");
              break;
    case 'sponsor':
                      // open this url
          window.open("http://www.projectmakeoveruf.org/sponsors");
          break;


        // last option
      default:
        console.log('There has been a switch error.');
        break;
    } // end switch
  } // end onclick

}); // end clips.forEach
