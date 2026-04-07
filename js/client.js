/* Story Points Power-Up for Trello
   Threeclipse Inc. — v1.0
   Discipline-tagged story point tracking */

function getPoints(t, cardId) {
  return t.get(cardId, 'shared', 'storyPoints').then(function(data) {
    return data || { entries: [] };
  });
}

function getTotal(entries) {
  return entries.reduce(function(sum, e) { return sum + (e.points || 0); }, 0);
}

function getCurrentCardPoints(t) {
  return t.card('id').then(function(card) {
    return getPoints(t, card.id).then(function(data) {
      return { id: card.id, data: data };
    });
  });
}

TrelloPowerUp.initialize({

  'card-badges': function(t, options) {
    return getCurrentCardPoints(t).then(function(current) {
      var entries = current.data.entries || [];
      if (entries.length === 0) return [];

      var total = getTotal(entries);
      var summary = entries.map(function(e) {
        return e.discipline + ': ' + e.points;
      }).join(' | ');

      return [{
        text: total + ' pts',
        color: 'blue',
        title: summary
      }];
    });
  },

  'card-detail-badges': function(t, options) {
    return getCurrentCardPoints(t).then(function(current) {
      var entries = current.data.entries || [];
      var badges = [];

      entries.forEach(function(entry) {
        badges.push({
          title: entry.discipline,
          text: entry.points + ' pts',
          color: 'blue'
        });
      });

      if (entries.length > 1) {
        badges.push({
          title: 'Total',
          text: getTotal(entries) + ' pts',
          color: 'green'
        });
      }

      return badges;
    });
  },

  'card-back-section': function(t, options) {
    return getCurrentCardPoints(t).then(function(current) {
      var entries = current.data.entries || [];
      return {
        title: '📊 Story Points',
        icon: '',
        content: {
          type: 'iframe',
          url: t.signUrl('./pages/card-section.html'),
          height: Math.max(80, 44 + entries.length * 36 + 50)
        }
      };
    });
  },

  'card-buttons': function(t, options) {
    return [{
      icon: 'https://cdn-icons-png.flaticon.com/16/2991/2991114.png',
      text: 'Story Points',
      callback: function(tc) {
        return tc.popup({
          title: 'Add Story Points',
          url: './pages/add-points.html',
          height: 200
        });
      }
    }];
  }

}, {
  appName: 'Story Points by Threeclipse'
});
