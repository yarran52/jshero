(function(dateUtil) {

jshero.koans.add({

  id: 'date',

  title: 'Datum und Uhrzeit',

  lesson: 'Um mit Datum und Uhrzeit zu arbeiten, verwendet man <code>Date</code>-Objekte. Ein <code>Date</code>-Objekt repräsentiert ' +
    'einen Zeitpunkt, also ein Datum zusammen mit einer Uhrzeit. Die Uhrzeit wird dabei auf die Millisekunde genau festgelegt. ' +
    'Ein Date-Objekt erzeugt man mit <code>new Date()</code>. Es gibt 4 mögliche Aufrufe: ' +
    '<pre><code>// aktueller Zeitpunkt<br>var d1 = new Date();</code></pre>' +
    'Ohne Parameter erzeugt <code>new Date()</code> ein Date-Objekt, das dem Zeitpunkt seines Aufrufs entspricht. Wird obiges Beispiel ' +
    'am 1. Mai 2017 um 8:15 Uhr aufgerufen, so enthält <code>d1</code> eben diesen Zeitpunkt.<br>' +
    '<pre><code>// Aufruf mit Jahr, Monat, Tag, Stunde,<br>// Stunde, Minute, Sekunde, Millisekunde<br>var d2 = new Date(2017, 2, 8, 16, 31, 10, 117);</code></pre>' +
    'Möchte man ein Date-Objekt zu einem bestimmten Zeitpunkt erstellen, verwendet man am besten die zweite Möglichkeit. ' +
    'Hier übergibt man als Parameter das Jahr, den Monat, den Tag, die Stunde, die Minute, die Sekunde und die Millisekunde. ' +
    'Das Jahr muss in voller Länge übergeben werden. <code>17</code> ergibt das Jahr 17 n. Chr. und <code>2017</code> das Jahr 2017 n. Chr. ' +
    'Bei dem Monat muss man aufpassen. JavaScript nummeriert die Monate von 0 (Januar) bis 11 (Dezember). Alle weiteren Zahlen entsprechen der üblichen ' +
    'Bedeutung. <code>d2</code> repräsentiert also den Zeitpunkt 8.3.2017, 16:31:10 Uhr und 117 Millisekunden.<br>' +
    'Die Parameter Millisekunde, Sekunde, Minute, Stunde und Tag sind - in dieser Reihenfolge - optional. Man kann sie weglassen. ' +
    'Gibt man sie nicht an, werden die Zeitangaben automatisch auf 0 gesetzt. Der Tag wird auf den Monatsersten gesetzt. ' +
    'Das ist besonders praktisch, wenn man nur mit einem Datum arbeiten möchte. ' +
    'Dann läßt man einfach alle Zeitangaben weg. <code>new&nbsp;Date(2017, 5, 2)</code> ist der 2.6.2017, 0:00 Uhr.<br>' +
    '<pre><code>// Millisekunden seit dem 1.1.1970<br>var d3 = new Date(86400000);</code></pre>' +
    'Bei der dritten Variante übergibt man die vergangenen Millisekunden seit dem 1.1.1970, 0:00 Uhr. Der Bezugspunkt 1.1.1970 für Datumsangaben ist seit den ' +
    'Tagen von Unix und der Programmiersprache C in der IT üblich geworden. Ein Tag hat 24 * 60 * 60 * 1000 = 86400000 Millisekunden. <code>d3</code> ist ' +
    'also der 2.1.1970, 0:00 Uhr.<br>' +
    '<pre><code>// Übergabe eines Datumsstrings<br>var d4 = new Date("2017-3-8T16:31:10.117");</code></pre>' +
    'Bei der vierten Variante wird ein Datumsstring in einem bestimmten Format, d.h. in einer bestimmten Schreibweise, übergeben. ' +
    '<code>d4</code> entspricht ebenfalls dem Zeitpunkt 8.3.2017, 16:31:10 Uhr und 117 Millisekunden. Diese Varainte ist jedoch nicht zu empfehlen, ' +
    'da verschiedene Browser leichte Unterschiede bei der Bestimmung des Datums aufweisen.',

  task: 'Schreibe eine Funktion <code>nikolaus</code>, die eine Jahreangabe als Zahl entgegennimmt und  die ein Date-Objekt mit dem 6. Dezember ' +
    'des übergebenen Jahres, 0:00 Uhr, zurückgibt. <code>nikolaus(2017)</code> sollte ein Date-Objekt mit dem Zeitpunkt 6.12.2017, 0:00 Uhr zurückgeben.',

  beforeTests: function() {
    if (typeof nikolaus !== "undefined") {
      nikolaus = undefined;
    }
  },

  tests: [

    function() {
      var ok = typeof nikolaus === 'function';
      var msg;
      if (ok) {
        msg = "<code>nikolaus</code> ist eine Funktion.";
      } else {
        msg = "<code>nikolaus</code> ist keine Funktion.";
      }
      return {
        ok: ok,
        msg: msg
      };
    },

    function() {
      var ok = nikolaus.length === 1;
      var msg;
      if (ok) {
        msg = "<code>nikolaus</code> hat 1 Parameter.";
      } else {
        msg = "<code>nikolaus</code> hat nicht 1, sondern " + nikolaus.length + " Parameter.";
      }
      return {
        ok: ok,
        msg: msg
      };
    },

    function() {
      var ok, msg, e;
      try {
        var result = nikolaus(2017);
        ok = dateUtil.isDate(result);
        if (ok) {
          msg = '<code>nikolaus(2017)</code> gibt ein Date-Objekt zurück.';
        } else {
          msg = '<code>nikolaus(2017)</code> gibt kein Date-Objekt zurück.';
        }
      } catch(exc) {
        ok = false;
        msg = 'Fehler beim Aufruf von <code>nikolaus(2017)</code>.';
        e = exc;
      }
      return {
        ok: ok,
        msg: msg,
        e: e
      };
    },

    function() {
      var ok, msg, e;
      try {
        var result = nikolaus(2017);
        ok = result.getTime() === (new Date(2017, 11, 6)).getTime();
        if (ok) {
          msg = '<code>nikolaus(2017)</code> gibt den 6.12.2017 zurück.';
        } else {
          msg = '<code>nikolaus(2017)</code> gibt nicht den 6.12.2017 zurück, sondern den ' + result.toLocaleString() + ' zurück.';
        }
      } catch(exc) {
        ok = false;
        msg = 'Fehler beim Aufruf von <code>nikolaus(2017)</code>.';
        e = exc;
      }
      return {
        ok: ok,
        msg: msg,
        e: e
      };
    },

    function() {
      var ok, msg, e;
      try {
        var result = nikolaus(1960);
        ok = dateUtil.isDate(result);
        if (ok) {
          msg = '<code>nikolaus(1960)</code> gibt ein Date-Objekt zurück.';
        } else {
          msg = '<code>nikolaus(1960)</code> gibt kein Date-Objekt zurück.';
        }
      } catch(exc) {
        ok = false;
        msg = 'Fehler beim Aufruf von <code>nikolaus(1960)</code>.';
        e = exc;
      }
      return {
        ok: ok,
        msg: msg,
        e: e
      };
    },

    function() {
      var ok, msg, e;
      try {
        var result = nikolaus(1960);
        ok = result.getTime() === (new Date(1960, 11, 6)).getTime();
        if (ok) {
          msg = '<code>nikolaus(1960)</code> gibt den 6.12.1960 zurück.';
        } else {
          msg = '<code>nikolaus(1960)</code> gibt nicht den 6.12.1960 zurück, sondern den ' + result.toLocaleString() + ' zurück.';
        }
      } catch(exc) {
        ok = false;
        msg = 'Fehler beim Aufruf von <code>nikolaus(1960)</code>.';
        e = exc;
      }
      return {
        ok: ok,
        msg: msg,
        e: e
      };
    }
  ]

});

})(jshero.date);
