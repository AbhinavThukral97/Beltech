let navToggle = false;

function generateLinks(page) {
  const innerHTML = `<div class="links">
    <div class="link ${page == "home" ? "current" : ""}">
      <a href="${page == "home" ? "./" : "../"}index.html">
        <div class="title">Home</div>
      </a>
    </div>
    <div class="link ${page == "about" ? "current" : ""}">
      <a href="${page == "home" ? "./" : "../"}index.html#about">
        <div class="title">About</div>
      </a>
    </div>
    <div class="link ${page == "products" ? "current" : ""}">
      <a href="${page == "home" ? "./" : "../"}index.html#product">
        <div class="title">Product</div>
      </a>
    </div>
    <div class="link ${page == "team" ? "current" : ""}">
      <a href="${page == "home" ? "./" : "../"}index.html#team">
        <div class="title">Team</div>
      </a>
    </div>
    <div class="link ${page == "careers" ? "current" : ""}">
      <a href="${page == "home" ? "./" : "../"}index.html#careers">
        <div class="title">Careers</div>
      </a>
    </div>
    <div class="link ${page == "contact" ? "current" : ""}">
      <a href="${page == "home" ? "./" : "../"}index.html#contact">
        <div class="title">Contact</div>
      </a>
    </div>
    </div>`;
  return innerHTML;
}

function generateHeader(page) {
  const headerHTML =
    `<div class="content-lg">
    <div class="logo">
    <a href="${page == "home" ? "./" : "../"}"><img src="${page == "home" ? "./" : "../"
    }img/Logo.svg" alt="Beltech Logo" /></a>
    </div>
    ` +
    generateLinks(page) +
    `
        <div class="hamburger">
            <div class="line-1"></div>
            <div class="line-2"></div>
        </div>
        <div class="fill"></div>
    </div>
    `;
  return headerHTML;
}

function generateFooter(page) {
  const footerHTML = `<div class="content-lg">
  <div class="footer-wrapper">
  <div class="logo">
    <img src="${page == "home" ? "./" : "../"
    }img/LogoSymbolMono.svg" alt="Beltech Logo" />
  </div>
  <div class="quick-links">  
    <div class="col">
      <div class="title">Navigation</div>
      <a href="${page == "home" ? "./" : "../"}index.html">Home</a>
      <a href="${page == "home" ? "./" : "../"}index.html#product">Products</a>
      <a href="${page == "home" ? "./" : "../"}index.html#team">Team</a>
      <a href="${page == "home" ? "./" : "../"}index.html#careers">Careers</a>
    </div>
    <div class="col">
      <div class="title">Quick Links</div>
      <a href="${page == "home" ? "./" : "../"}index.html#about">About</a>
      <a href="${page == "home" ? "./" : "../"}index.html#contact">Connect</a>
    </div>
    <div class="col">
      <div class="title">Connect</div>
      <a href="https://www.linkedin.com/company/beltechai/" target="_blank">LinkedIn</a>
      <a href="https://angel.co/company/beltech-3" target="_blank">Angellist</a>
      <a href="https://www.facebook.com/beltech1/" target="_blank">Facebook</a>
    </div>
  </div>
  <div class="socials">
  <a href="https://www.linkedin.com/company/beltechai/" target="_blank"><i class="fab fa-linkedin-in"></i></a>
  <a href="https://angel.co/company/beltech-3" target="_blank"><i class="fab fa-angellist"></i></a>
  <a href="https://www.facebook.com/beltech1/" target="_blank"><i class="fab fa-facebook-f"></i></a>
  </div>
  </div>
  <p class="sm">
    &copy; Copyright Beltech Green Pvt. Ltd. 2020 &middot; Made by <a>Abhinav Thukral</a>
  </p>
</div>`;
  return footerHTML;
}

function headerScroll(page) {
  let i = $(window).scrollTop();
  if (i > 0) {
    $("header").addClass("min");
  } else {
    $("header").removeClass("min");
  }
}

function openNav(page) {
  $("nav").css("display", "block");
  setTimeout(function () {
    $("nav").css("opacity", "1");
  }, 100);
  $(".hamburger").addClass("close");
  navToggle = true;
}

function closeNav(page) {
  $("nav").css("opacity", "0");
  setTimeout(function () {
    $("nav").css("display", "none");
  }, 500);
  $(".hamburger").removeClass("close");
  headerScroll(page);
  navToggle = false;
}

$(document).ready(function () {
  const page = $("header").attr("aria-label");
  $("header").html(generateHeader(page));
  $("nav").html(generateLinks(page));
  $("footer").html(generateFooter(page));

  $(window).scroll(function () {
    if (!navToggle) {
      headerScroll(page);
    }
  });

  $("header").on("click", ".hamburger", function () {
    if (navToggle) {
      closeNav(page);
    } else {
      openNav(page);
    }
  });
});
