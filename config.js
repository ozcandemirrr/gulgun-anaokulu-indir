window.GULGUN_DOWNLOADS = { iosUrl: "", androidUrl: "", androidKind: "apk" };
document.addEventListener("DOMContentLoaded", function () {
  var card = document.querySelector(".card > p");
  if (card) card.textContent = "Bağlantı sorununu gideren güncelleme test ediliyor. Yeni sürüm doğrulandıktan sonra indirme bağlantıları açılacak.";
  var oldLink = document.querySelector("a.web");
  if (oldLink) oldLink.remove();
  var footer = document.querySelector("footer");
  if (footer) footer.textContent = "Güncelleme hazırlanıyor. Eski sürümü kullanmayın.";
});
