var ckBox = document.querySelector("#ckBox"),
    ckAcptBtn = document.querySelector("#ckAcptBtn"),
    ckErrMes = "Cookie can't be set! Please unblock this site from the cookie setting of your browser.";
if (null != ckBox) {
    ckAcptBtn.onclick = () => {
        document.cookie = "CookieConsent=Accepted; max-age=2592000; path=/", document.cookie ? ckBox.classList.add("acptd") : alert(ckErrMes)
    };
    let e = document.cookie.indexOf("CookieConsent=Accepted"); - 1 != e ? ckBox.classList.add("hidden") : ckBox.classList.remove("hidden")
}
