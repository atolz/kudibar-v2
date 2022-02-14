import Vue from 'vue';
import moment from 'moment';

const cryptBox = require('./encrypt');

Vue.prototype.$helper = {
   /**
    * First Capital letter
    * @param  {[type]} str [description]
    * @return {[type]}     [description]
    */
   ucFirst(str) {
      return str.charAt(0).toUpperCase() + str.toLowerCase().slice(1);
   },

   /**
    * Currency
    * @param  {[type]} str [description]
    * @return {[type]}     [description]
    */
   currency(str) {
      let curr = [
         { type: "USD", sym: "$" },
         { type: "NGN", sym: "₦" }
      ];
      let sym = "";

      for (let i in curr) {
         if (curr[i].type === str) {
            sym = curr[i].sym;
         }
      }

      return sym;
   },

   /**
    * Date Filter
    */
   dateFilter(date) {
      const months = [
         "Jan",
         "Feb",
         "Mar",
         "Apr",
         "May",
         "Jun",
         "Jul",
         "Aug",
         "Sep",
         "Oct",
         "Nov",
         "Dec"
      ];
      let cd = new Date(date);
      return (
         cd.getDate() + " " + months[cd.getMonth()] + ", " + cd.getFullYear()
      );
   },

   /**
    * Get url params
    * @return {[type]} [description]
    */
   getParams() {
      let url = window.location.search;

      if (url !== "") {
         let queryString = url ? url.split("?")[1] : url.slice(1);
         let params = queryString.split("&");
         let arr = [],
            obj = {};

         params.forEach((v, i) => {
            let b = v.split("="),
               n = {};
            n[b[0]] = b[1];

            Object.assign(obj, n);

            arr.push(n);
         });

         return obj;
      }

      return [];
   },

   /**
    * Compare two dates
    * @param  {[type]} first  [description]
    * @param  {[type]} second [description]
    * @return {[type]}        [description]
    */
   daysBetween(first, second) {
      // Copy date parts of the timestamps, discarding the time parts.
      var one = new Date(
         first.getFullYear(),
         first.getMonth(),
         first.getDate()
      );
      var two = new Date(
         second.getFullYear(),
         second.getMonth(),
         second.getDate()
      );

      // Do the math.
      var millisecondsPerDay = 1000 * 60 * 60 * 24;
      var millisBetween = two.getTime() - one.getTime();
      var days = millisBetween / millisecondsPerDay;

      // Round down.
      return Math.floor(days);
   },

   /**
    * Slug
    * @param  {[type]} string [description]
    * @return {[type]}        [description]
    */
   slug(string) {
      const a = "àáäâãåăæçèéëêǵḧìíïîḿńǹñòóöôœṕŕßśșțùúüûǘẃẍÿź·/_,:;";
      const b = "aaaaaaaaceeeeghiiiimnnnoooooprssstuuuuuwxyz------";
      const p = new RegExp(a.split("").join("|"), "g");

      return string
         .toString()
         .toLowerCase()
         .replace(/\s+/g, "-") // Replace spaces with -
         .replace(p, c => b.charAt(a.indexOf(c))) // Replace special characters
         .replace(/&/g, "-and-") // Replace & with 'and'
         .replace(/[^\w\-]+/g, "") // Remove all non-word characters
         .replace(/\-\-+/g, "-") // Replace multiple - with single -
         .replace(/^-+/, "") // Trim - from start of text
         .replace(/-+$/, ""); // Trim - from end of text
   },

   /**
    * Str to array
    */
   strArr(str, sep = "&", i = "") {
      let arr = str !== undefined ? str.split(sep) : [];
      if (arr.length > 0) {
         return i !== "" ? arr[i] : arr;
      }

      return [];
   },

   /**
    * Object empty
    */
   isEmpty(obj) {
      for (var key in obj) {
         if (obj.hasOwnProperty(key)) return false;
      }
      return true;
   },

   str_random(l = 10) {
      let a = `abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789`;
      let str = "";

      for (let i = 0; i < l; i++) {
         str += a[Math.floor(Math.random() * a.length)];
      }

      return str;
   },

   str_random_num(l = 15) {
      let a = `123456789`;
      let str = "";

      for (let i = 0; i < l; i++) {
         str += a[Math.floor(Math.random() * a.length)];
      }

      return str;
   },

   str_limit(str, num) {
      let regex = /(<([^>]+)>)/gi;
      let result = str.replace(regex, "");
      let bask = "";

      for (let i in result) {
         if (i <= num) {
            bask += result[i];
         }
      }

      bask += str.length > bask.length ? "..." : "";

      return this.ucFirst(bask);
   },

   number_format(str) {
      let s = str.toString();
      return s.replace(/(\d)(?=(\d{3})+(?:\.\d+)?$)/g, "$1,");
   },

   /**
    * One k number format
    * @param  {[type]} x [description]
    * @return {[type]}   [description]
    */
   onek(x) {
      if (isNaN(x)) return x;

      if (x < 9999) return x;
      if (x < 1000000) return Math.round(x / 1000) + "K";
      if (x < 10000000) return (x / 1000000).toFixed(2) + "M";
      if (x < 1000000000) return Math.round(x / 1000000) + "M";
      if (x < 1000000000000) return Math.round(x / 1000000000) + "B";

      return "1T+";
   },

   /**
    * Days to date
    * @param  {[type]} date [description]
    * @param  {[type]} days [description]
    * @return {[type]}      [description]
    */
   days_to_date(date, days) {
      let d = new Date(date);
      d.setDate(d.getDate() + days);

      return d;
   },

   /**
    * Store local
    * @param  {[type]} key  [description]
    * @param  {[type]} data [description]
    * @return {[type]}      [description]
    */
   store_local(key, data) {
      window.localStorage[key] = data;
   },

   /**
    * Get local
    * @param  {[type]} key [description]
    * @return {[type]}     [description]
    */
   get_local(key) {
      return window.localStorage[key];
   },

   /**
    * Greet people
    * @return {[type]} [description]
    */
   greet() {
      let today = new Date();
      let hourNow = today.getHours();
      let greeting;

      if (hourNow > 18) {
         greeting = "Good evening,";
      } else if (hourNow > 12) {
         greeting = "Good afternoon,";
      } else if (hourNow > 0) {
         greeting = "Good morning,";
      } else {
         greeting = "Welcome,";
      }

      return greeting;
   },

   /**
    * Status
    * @param  {[type]} res    [description]
    * @param  {[type]} status [description]
    * @return {[type]}        [description]
    */
   status(message, status) {
      let notify = this.$snotify;

      notify[status](message, "", {
         timeout: 3000,
         showProgressBar: true
      });
   },

   copyStringToClipboard(str) {
      // Create new element
      var el = document.createElement("textarea");
      // Set value (string to be copied)
      el.value = str;
      // Set non-editable to avoid focus and move outside of view
      el.setAttribute("readonly", "");
      el.style = { position: "absolute", left: "-9999px" };
      document.body.appendChild(el);
      // Select text inside element
      el.select();
      // Copy text to clipboard
      document.execCommand("copy");
      // Remove temporary element
      document.body.removeChild(el);
   },

   arrSearchFilter(key, arr) {
      let regp = new RegExp(search);
      let res = arr.filter(function(el) {
         return regp.test(el.title);
      });

      console.log(res);
   },

   crypt(str) {
      const cryptr = new cryptBox.CryptBox(process.env.CRPT_SECRET);
      const encryptedString = cryptr.encrypt(str);

      return encryptedString;
   },

   dcrypt(str) {
      const cryptr = new cryptBox.CryptBox(process.env.CRPT_SECRET);
      return cryptr.decrypt(str);
   },

   discount(v, p) {
      return v * (p / 100);
   },

   compareTwoDates(created, expire) {
      var when = moment(new Date(created)); //todays date
      var end = moment(new Date(expire)); // another date

      if (when < end) return true;

      return false;
   },

   previousWeekDays() {
      let d = new Date();
      let day = d.getDay();
      let days = [
         "Sunday",
         "Monday",
         "Tuesday",
         "Wednesday",
         "Tursday",
         "Friday",
         "Saturday"
      ];
      let front = [];
      let back = [];

      if (day !== 0) {
         for (let i = 0; i < day; i++) {
            front.push(days[i]);
         }

         for (let i = 0; i < days.length; i++) {
            if (i >= day) {
               back.unshift(days[i]);
            }
         }
         let rb = back.reverse();
         return rb.concat(front);

      } else {
         return days;
      }
   },

   URLParser(u){
      var path="",query="",hash="",params;
      if(u.indexOf("#") > 0){
         hash = u.substr(u.indexOf("#") + 1);
         u = u.substr(0 , u.indexOf("#"));
      }
      if(u.indexOf("?") > 0){
         path = u.substr(0 , u.indexOf("?"));
         query = u.substr(u.indexOf("?") + 1);
         params= query.split('&');
      }else
         path = u;
      return {
         getHost: function(){
            var hostexp = /\/\/([\w.-]*)/;
            var match = hostexp.exec(path);
            if (match != null && match.length > 1)
                  return match[1];
            return "";
         },
         getPath: function(){
            var pathexp = /\/\/[\w.-]*(?:\/([^?]*))/;
            var match = pathexp.exec(path);
            if (match != null && match.length > 1)
                  return match[1];
            return "";
         },
         getHash: function(){
            return hash;
         },
         getParams: function(){
            return params
         },
         getQuery: function(){
            return query;
         },
         setHash: function(value){
            if(query.length > 0)
                  query = "?" + query;
            if(value.length > 0)
                  query = query + "#" + value;
            return path + query;
         },
         setParam: function(name, value){
            if(!params){
                  params= new Array();
            }
            params.push(name + '=' + value);
            for (var i = 0; i < params.length; i++) {
                  if(query.length > 0)
                     query += "&";
                  query += params[i];
            }
            if(query.length > 0)
                  query = "?" + query;
            if(hash.length > 0)
                  query = query + "#" + hash;
            return path + query;
         },
         getParam: function(name){
            if(params){
                  for (var i = 0; i < params.length; i++) {
                     var pair = params[i].split('=');
                     if (decodeURIComponent(pair[0]) == name)
                        return decodeURIComponent(pair[1]);
                  }
            }
            console.log('Query variable %s not found', name);
         },
         hasParam: function(name){
            if(params){
                  for (var i = 0; i < params.length; i++) {
                     var pair = params[i].split('=');
                     if (decodeURIComponent(pair[0]) == name)
                        return true;
                  }
            }
            console.log('Query variable %s not found', name);
         },
         removeParam: function(name){
            query = "";
            if(params){
                  var newparams = new Array();
                  for (var i = 0;i < params.length;i++) {
                     var pair = params[i].split('=');
                     if (decodeURIComponent(pair[0]) != name)
                           newparams .push(params[i]);
                  }
                  params = newparams;
                  for (var i = 0; i < params.length; i++) {
                     if(query.length > 0)
                        query += "&";
                     query += params[i];
                  }
            }
            if(query.length > 0)
                  query = "?" + query;
            if(hash.length > 0)
                  query = query + "#" + hash;
            return path + query;
         },
      }
   },

   errorBag(error){
      let bag = {};
      if (error.response) {
         // Request made and server responded
         // console.log(error.response.data);
         // console.log(error.response.status);
         // console.log(error.response.headers);
         bag = error.response.data;
      } else if (error.request) {
         bag = error.request;
      } else {
         bag = {
            message: error.message,
            statusCode: 500,
            errors: []
         };
      }

      return bag;
   }

};
