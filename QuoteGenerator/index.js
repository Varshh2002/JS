function help() {
  var quotes = {
    "- Jules Renard":
      '"The truly free man is the one who can turn down an invitation to dinner without giving an excuse."',

    "- Albert Einstein":
      '"Our task must be to free ourselves... by widening our circle of compassion to embrace all living creatures and the whole of nature "',

    "- Candace Bushnell":
      '"Man cannot be freed by the same injustice that enslaved it"',

    "- Epictetus":
      '"No man is free who is not master of himself."',

    "- Lewis B. Smedes":
                  '"To forgive is to set a prisoner free and discover that the prisoner was you."',

    "- James A. Garfield":
      '"The truth will set you free, but first it will make you miserable"',

    "- Bob Dylan":
      '"No one is free, even the birds are chained to the sky."',
  }

  var authors=Object.keys(quotes);
  var author=authors[Math.floor(Math.random()*authors.length)];
  var quote=quotes[author];

  document.getElementById("quote").innerHTML=quote;
  document.getElementById("author").innerHTML=author;

}
