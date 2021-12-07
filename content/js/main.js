$(document).ready(function () {
  let id = "";
  // START SEARCH DIV IN NAV BAR
  $(".search-btn").click(function () {
    $("#searchDiv").addClass("active");
  });
  $(".search-form__close-btn").click(function () {
    $("#searchDiv").removeClass("active");
  });
  // END  SEARCH DIV IN NAV BAR
  $("#icon-nav").click(function () {
    $(this).toggleClass("open");
  });

  // START COLLAPSE  IN FOOTER
  if (window.matchMedia("(min-width:991px)").matches) {
    $(".accordion-collapse").addClass("show");
  } else {
    $(".accordion-collapse").removeClass("show");
  }
  // END COLLPASE IN FOOTER

 

  // ===================START HOME PAGE=================================
  if ($(".home-page").length > 0) {
    // START TIMER
    var countDownDate = new Date("dec 12, 2021 12:00:00").getTime(),
      myfunc = setInterval(function () {
        var now = new Date().getTime(),
          timeleft = countDownDate - now,
          days = Math.floor(timeleft / (1000 * 60 * 60 * 24)),
          hours = Math.floor(
            (timeleft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
          ),
          minutes = Math.floor((timeleft % (1000 * 60 * 60)) / (1000 * 60)),
          seconds = Math.floor((timeleft % (1000 * 60)) / 1000);

        document.getElementById("days").innerHTML = days < 10 ? `0${days} ` : days;
        document.getElementById("hours").innerHTML = hours < 10 ? `0${hours} ` : hours;
        document.getElementById("mins").innerHTML = minutes < 10 ? `0${minutes} ` : minutes;
        document.getElementById("secs").innerHTML = seconds < 10 ? `0${seconds} ` : seconds;

        if (timeleft < 0) {
          clearInterval(myfunc);
          document.getElementById("days").innerHTML = "";
          document.getElementById("hours").innerHTML = "";
          document.getElementById("mins").innerHTML = "";
          document.getElementById("secs").innerHTML = "";
          document.getElementById("timer").style.display = "none";
          document.getElementById("end").innerHTML = "Sorry The Offer End!!";
          // document.getElementById("timerEnds").remove();
        } else {
          document.getElementById("");
        }
      }, 1000);
    // END TIMER

    // START COUNTER
    $(window).on("scroll", function () {
      let scrollTop = Math.ceil(Number($(window).scrollTop()));
      let pageY = scrollY;
      // console.log("scrollTopscrollTopscrollTopscrollTop", scrollTop, pageY);
      if (window.pageYOffset > 2600) {
        const counters = document.querySelectorAll(".course-published__count");
        const speed = 2000;

        counters.forEach((counter) => {
          const updateCount = () => {
            const target = +counter.getAttribute("data-target");
            const count = +counter.innerText;
            const increment = target / speed;

            if (count < target) {
              counter.innerText = Math.ceil(count + increment);
              setTimeout(updateCount, 1);
            } else {
              counter.innerText = target;
            }
          };
          updateCount();
        });
      }
    });
    // END COUNTER

    // START  CHANGE CARD SECTION TO SLIDER
    if (window.matchMedia("(max-width:768px)").matches) {
      $(".owl-carousel").owlCarousel({
        loop: true,
        margin: 10,
        loop: false,
        responsiveClass: true,

        responsive: {
          0: {
            items: 1,
            nav: true,
          },
          600: {
            items: 1,
            nav: false,
          },
          1000: {
            items: 2,
            nav: true,
            loop: false,
          },
        },
      });
    }
    // END  CHANGE CARD SECTION TO SLIDER

    // START VALIDATION IN SUBSCRIBE SECTION
    $(".subscribe-now__content__form").validate({
      rules: {
        email: {
          required: true,
          email: true,
        },
      },
    });
    // END VALIDATION IN SUBSCRIBE SECTION

     // START SCROLL TO TOP BUTTON
  if (window.matchMedia('(min-width:992px)').matches){
    let span = document.querySelector(".up");
    window.onscroll = () => {
      if (scrollY >= 800) {
        span.classList.add("active");
      } else {
        span.classList.remove("active");
      }
    };
    span.onclick = () => {
      window.scrollTo({
        top:0,
        behavior:"smooth",
      })
    }
  }
  // END SCROLL TO TOP BUTTON
  }

  // ===================END HOME PAGE===================================

  //==================== START LISTING PAGE=============================
  if ($(".listing-page").length > 0) {
    let id = "";
    let posts;
    let listingWrapper = $(".wrapper-listing");
    let filterItems = [];
    let newArr = [];

    let categories = $("#categories-list");

    function filterCategoriesList(selectedId) {
      let filteredCatIndex = posts
        .map((ele) => {
          return ele.id;
        })
        .indexOf(+selectedId);
      // debugger
      filterItems = posts[filteredCatIndex].items;
      fillListItems(posts[filteredCatIndex].items);
    }

    function filterLanguages(languageName) {
      if (filterItems.length == 0) {
        newArr.forEach((ele) => {
          if (ele.lang == languageName) {
            filterItems = filterItems.concat(ele);
          }
        });
        console.log("filllter languases", filterItems);
      } else {
        filterItems = filterItems.filter((ele) => {
          return ele.lang == languageName;
        });
        console.log("filllter lang", filterItems);
      }
    }

    function filterInstructor(instructorName) {
      if (filterItems.length == 0) {
        newArr.forEach((ele) => {
          if (ele.instructor == instructorName) {
            filterItems = filterItems.concat(ele);
          }
        });
        console.log("filllter instructor", filterItems);
      } else {
        filterItems = filterItems.filter((ele) => {
          return ele.instructor == instructorName;
        });
        console.log("filllter instruct", filterItems);
      }
    }
    categories.on("change", function () {
      id = categories.val();
      filterCategoriesList(id);
      console.log("categor", filterItems);
    });

    let languages = $("#languages");
    let languageName;
    languages.on("change", function () {
      languageName = languages.val();
      filterLanguages(languageName);
    });

    let instructors = $("#instructors");
    let instructorName;
    instructors.on("change", function () {
      instructorName = instructors.val();
      filterInstructor(instructorName);
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

    let isCatFill = false;

    function fillCategores(posts) {
      posts.forEach((ele) => {
        categories.append(`
          <option value="${ele.id}">${ele.level}</option>
        `);
      });
      isCatFill = true;
    }
    async function getListingCard(id) {
      let response = await fetch("listing.json");
      posts = await response.json();
      if (!isCatFill) {
        fillCategores(posts);
      }
      console.log("poooooste", posts);

      if (id > 0) {
        $(".wrapper-listing").empty();
        newArr.push(posts);
      } else {
        posts.forEach((ele) => {
          newArr.push(...ele.items); //spread  es5
        });
        console.log(newArr);
      }
      fillListItems(newArr);
      filterLanguages(languageName);
    }

    function fillListItems(list) {
      listingWrapper.empty();
      list.forEach((post) => {
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

    // START VALIDATION IN SUBSCRIBE SECTION
    $(".subscribe-now__content__form").validate({
      rules: {
        email: {
          required: true,
          email: true,
        },
      },
    });
    // END VALIDATION IN SUBSCRIBE SECTION
  }

  //===================== END LISTING PAGE==============================

  // ===================  START PRICE PAGE =============================
  if ($(".price-page").length > 0) {
    let tabs = document.querySelectorAll(".tab-list__item");
    let tabsArray = Array.from(tabs);
    let divContent = document.querySelectorAll(".tabs-content");
    let divsArray = Array.from(divContent);

    tabsArray.forEach((ele) => {
      ele.addEventListener("click", function (e) {
        tabsArray.forEach((ele) => {
          ele.classList.removeClass;
        });
      });
    });
    tabsArray.forEach((ele) => {
      ele.addEventListener("click", function (e) {
        tabsArray.forEach((ele) => {
          ele.classList.remove("active");
        });
        e.currentTarget.classList.add("active");
        divsArray.forEach((div) => {
          div.style.display = "none";
        });
        document.querySelector(e.currentTarget.dataset.cont).style.display =
          "block";
      });
    });
  }

  // ====================== END PRICE PAGE ===============================
  // =======================START CONTACT PAGE============================
  if ($(".contact-us-page").length > 0) {
    // START VALIDATION IN CONTACT FORM
    // END VALIDATION IN CONTACT FORM
    $("#contact-form").validate();
  }
  // =======================END CONTACT PAGE============================

  // ======================START SIGN UP PAGE=================
  if ($(".sign-up-page").length > 0) {
    $("#sign-up-form").validate({
      rules: {
        username: {
          required: true,
          minlength: 4,
        },
        password: {
          required: true,
          minlength: 8,
        },
        confirm_password: {
          required: true,
          minlength: 8,
          equalTo: "#password",
        },
      },
    });
  }
  // ======================END SIGN UP PAGE=================
});