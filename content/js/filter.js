$(document).ready(function () {
  if ($(".listing-page").length > 0) {
    let id = "";
    let posts;
    let listingWrapper = $(".wrapper-listing");
    let filterItems = [];
    let newArr = [];

    let categories = $("#categories-list");

    function filterCategoriesList(selectedId) {
      let filteredCatIndex = posts.map((ele) => {
        return ele.id
      }).indexOf(+selectedId)
      // debugger
      filterItems = posts[filteredCatIndex].items;
      fillListItems(posts[filteredCatIndex].items)
    }


    function filterLanguages(languageName) {
      if (filterItems.length == 0) {
        newArr.forEach((ele) => {
          if (ele.lang == languageName) {
            filterItems = filterItems.concat(ele)
          }
        })
        console.log("filllter languases", filterItems)

      } else {
        filterItems = filterItems.filter((ele) => {
          return ele.lang == languageName
        })
        console.log("filllter lang", filterItems)

      }

    }
    function filterInstructor(instructorName) {
      if (filterItems.length == 0) {
        newArr.forEach((ele) => {
          if (ele.instructor == instructorName) {
            filterItems = filterItems.concat(ele)
          }
        })
        console.log("filllter instructor", filterItems)

      }
      else {
        filterItems = filterItems.filter((ele) => {
          return ele.instructor == instructorName
        })
        console.log("filllter instruct", filterItems)

      }

    }
    categories.on("change", function () {
      id = categories.val();
      filterCategoriesList(id)
      console.log("categor", filterItems)
    });

    let languages = $("#languages");
    let languageName;
    languages.on("change" , function(){
      languageName = languages.val();
      filterLanguages(languageName)
    });

    let instructors = $("#instructors");
    let instructorName;
    instructors.on("change", function () {
      instructorName = instructors.val();
      filterInstructor(instructorName)
    });

    let Level = $("#Level");
    Level.on("change", function () {
      id = Level.val();
      getListingCard(id);
    });

    // let observer = new IntersectionObserver((entries) => {
    //   console.log("entrieeee", entries);
    //   getListingCard(id)
    // });
    // let target = document.querySelector(".subscribe-now");
    // observer.observe(target);

    let isCatFill = false

    function fillCategores(posts) {
      posts.forEach((ele) => {
        categories.append(`
          <option value="${ele.id}">${ele.level}</option>
        `)

      })
      isCatFill = true

    }
    async function getListingCard(id) {
      let response = await fetch('listing.json');
      posts = await response.json();
      if (!isCatFill) {
        fillCategores(posts)
      }
      console.log("poooooste", posts);

      if (id > 0) {
        $(".wrapper-listing").empty();
        newArr.push(posts);
      } else {
        posts.forEach((ele) => {
          newArr.push(...ele.items) //spread  es5

        })
        console.log(newArr)
      }
      fillListItems(newArr);
      filterLanguages(languageName);

    }

    function fillListItems(list) {
      listingWrapper.empty()
      list.forEach((post,) => {
        listingWrapper.append(`
          <div class="col-xs-12 col-sm-6 col-md-6 col-lg-4 col--edit">
            <div class="my-card">
              <div class="my-card__image outer">
                <img src="${post.imgUrl}" alt="" class="inner" />
                <div class="my-card__small-img">
                  <img src="${post.thambNailUrl}" alt="" />
                </div>
              </div>
              <div class="my-card__body">
                <h6 class="my-card__title">
                ${post.title}
                </h6>
                <p class="my-card__paragraph">${post.body}</p>
              </div>
                <a href="card-page.html" class="card-page-link-overlay"></a>
            </div>
          </div>
      `);
      });

    }
    getListingCard(id);

    // let levelsCat = $("#Categories");
    // levelsCat.on('change', function () {
    //   console.log("haaaaard" , this.val)
    // })
  }
});