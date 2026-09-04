/* ============================================================
   SmartZonen: diskret besoegstaeller (forsiden)
   Samme metode som AI-koerekortet, men eget dokument
   (stats/smartzonen) i samme Firebase-projekt.
   Taeller en gang pr. browser-session, viser intet ved fejl.
   ============================================================ */

(function () {
  if (typeof firebase === "undefined") return;

  var db = firebase.firestore();
  var ref = db.collection("stats").doc("smartzonen");
  var SESSION_KEY = "smartzonen_visit_counted_v1";

  function showCount(n) {
    var numEl = document.getElementById("visit-count");
    if (!numEl || typeof n !== "number") return;
    numEl.textContent = n.toLocaleString("da-DK");
  }

  var alreadyCountedThisSession = sessionStorage.getItem(SESSION_KEY) === "1";

  if (alreadyCountedThisSession) {
    ref.get().then(function (snap) {
      if (snap.exists) showCount(snap.data().count || 0);
    }).catch(function () {});
    return;
  }

  ref.set({ count: firebase.firestore.FieldValue.increment(1) }, { merge: true })
    .then(function () {
      sessionStorage.setItem(SESSION_KEY, "1");
      return ref.get();
    })
    .then(function (snap) {
      if (snap.exists) showCount(snap.data().count || 0);
    })
    .catch(function () {});
})();

