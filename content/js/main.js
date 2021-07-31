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

  // START COLLAPSE  IN FOOTER
  if (window.matchMedia("(max-width:767px)").matches) {
    var coll = document.querySelectorAll(".collapsible");
    var i;

    for (i = 0; i < coll.length; i++) {
      coll[i].onclick = function () {
        this.classList.toggle("active");
        var content = this.nextElementSibling;
        content.classList.toggle("active");
      };
    }
  }
  // END COLLPASE IN FOOTER

  // START HOME PAGE
  if ($(".home-page").length > 0) {
    // START TIMER
    var countDownDate = new Date("Jul 12, 2021 12:00:00").getTime(),
      myfunc = setInterval(function () {
        var now = new Date().getTime(),
          timeleft = countDownDate - now,
          days = Math.floor(timeleft / (1000 * 60 * 60 * 24)),
          hours = Math.floor(
            (timeleft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
          ),
          minutes = Math.floor((timeleft % (1000 * 60 * 60)) / (1000 * 60)),
          seconds = Math.floor((timeleft % (1000 * 60)) / 1000);

        document.getElementById("days").innerHTML = days;
        document.getElementById("hours").innerHTML = hours;
        document.getElementById("mins").innerHTML = minutes;
        document.getElementById("secs").innerHTML = seconds;

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
      let pageY = pageYOffset;
      console.log("scrollTopscrollTopscrollTopscrollTop", scrollTop, pageY);
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

    // POST request using fetch()
    fetch("https://jsonplaceholder.typicode.com/posts", {
      // Adding method type
      method: "POST",

      // Adding body or contents to send
      body: JSON.stringify({
        title: "foo",
        body: "bar",
        userId: 1,
      }),

      // Adding headers to the request
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      // Converting to JSON
      .then((response) => response.json())

      // Displaying results to console
      .then((json) => console.log(json));
  }
  // END HOME PAGE

  // ====================================================================================
  // ====================================================================================

  // START LISTING PAGE
  if ($(".listing-page").length > 0) {
    let categories = $("#Categories");
    categories.on("change", function () {
      id = categories.val();
      getListingCard(id);
    });
    let observer = new IntersectionObserver((entries) => {
      console.log("entrieeee", entries);
      getListingCard(id)
    });
    let target = document.querySelector(".subscribe-now");
    observer.observe(target);


    async function getListingCard(id) {
      let listingWrapper = $(".wrapper-listing");
      let response = await fetch(
        `https://jsonplaceholder.typicode.com/posts/${id}`
      );
      // debugger;
      let posts = await response.json();
      console.log(posts);
      let newArr = [];
      if (id > 0) {
        $(".wrapper-listing").empty();
        newArr.push(posts);
      } else {
        newArr = posts;
      }
      newArr.forEach((post, index) => {
        if (index < 3) {
          listingWrapper.append(`
          <div class="col-xs-12 col-sm-6 col-md-4 col-lg-4 col--edit">
            <div class="my-card">
          <div class="my-card__image outer">
            <img src="content/images/card-1.jpg" alt="" class="inner" />
            <div class="my-card__small-img">
              <img src="content/images/coursera.jpg" alt="" />
            </div>
          </div>
          <div class="my-card__body">
            <h6 class="my-card__title">
              ${post.title}
            </h6>
            <p class="my-card__paragraph">${post.body}</p>
          </div>
        </div>
      </div>
      `);
        }
      });

      // .then(response => response.json())
      // .then(json => console.log(json))
    }
    getListingCard(id);

    // fetch('https://jsonplaceholder.typicode.com/todos/1')
    //   .then(response => response.json())
    //   .then(json => console.log(json))
  }
  // END LISTING PAGE

  // =============  START PRICE PAGE ==============
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
});

// =============  END PRICE PAGE ==============
