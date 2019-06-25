var countSegments = function(s) {
    if(s.length === 0 || s.trim().length === 0) return 0
    s = s.trim().split(" ").filter(function(chars){
        return chars !== ''
    })
    return s.length
};

var countSegments = function(s) {
    let res=0;
    for(let i=0; i<s.length; i++)
        if(s.charAt(i)!=' ' && (i==0 || s.charAt(i-1)==' '))
            res++;        
    return res;
};





SELECT * from CITY where countrycode = 'USA' and population > 100000;
SELECT * from City;
SELECT * from City where ID = 1661;
select city, state from STATION;
select distinct city from STATION where mod(ID,2) = 0;
select  count(city) - count(distinct city) from STATION;

select city, LENGTH(city) from (SELECT city from STATION  order by LENGTH(city), city) where ROWNUM <=1 ;
select city, LENGTH(city) from (SELECT city from STATION  order by LENGTH(city) DESC, city) where ROWNUM <=1 ;

SELECT  city from STATION where city LIKE 'A%' or city LIKE 'E%' or city LIKE 'I%' or city LIKE 'O%' or city LIKE 'U%';

SELECT DISTINCT city from STATION where REGEXP_LIKE(city, '^[AEIOUaeiou].*[AEIOUaeiou]$');

select Name from STUDENTS where marks > 75 order by SUBSTR(name, -3),ID;

SELECT COUNT(NAME) from City where population > 100000;

SELECT SUM(population) from City where district = 'California';

SELECT CEIL(AVG(salary) - AVG(REPLACE(salary, '0', ''))) from Employees;

SELECT TRUNC(AVG(population)) from City;

SELECT MAX(population) - MIN(population) from City;


SELECT * from 
(SELECT earnings, COUNT(employee_id) from
(SELECT salary * months earnings , employee_id from Employee)
group by earnings
order by earnings DESC)
where ROWNUM = 1
;


SELECT st.name, gd.Grade,  st.marks 
from STUDENTS st join GRADES gd on (st.marks <= gd.Max_Mark and st.marks >= gd.Min_Mark ) 
where gd.Grade > 7  
order by gd.Grade DESC, st.name;
SELECT 'NULL' , gd.Grade,  st.marks 
from STUDENTS st join GRADES gd on (st.marks <= gd.Max_Mark and st.marks >= gd.Min_Mark ) 
where gd.Grade <= 7 
order by gd.Grade DESC, st.marks;  


SELECT hac.hacker_id, hac.name from Submissions sub 
JOIN Challenges cha 
on sub.challenge_id = cha.challenge_id 
JOIN Difficulty dif 
on cha.difficulty_level = dif.difficulty_level
JOIN Hackers hac 
on hac.hacker_id = sub.hacker_id
where sub.score = dif.score 
group by hac.name, hac.hacker_id
having COUNT(hac.name) > 1
order by COUNT(hac.name) DESC, hac.hacker_id;


SELECT WANDS.id, Min.age, Min.min_coins, Min.power from
(SELECT wd.code, wp.age, min(wd.coins_needed) as min_coins, wd.power, AVG(wp.is_evil) 
from Wands wd 
JOIN Wands_Property wp 
on wd.code = wp.code
having NOT AVG(wp.is_evil) = 1
group by wd.code, wd.power, wp.age) Min JOIN
WANDS on Min.code = WANDS.code AND Min.power = WANDS.power AND Min.min_coins = WANDS.coins_needed
order by Min.power DESC, Min.age DESC
;


SELECT cha.hacker_id, hackers.name, cha.challenge_num from 
(SELECT a.hacker_id, a.challenge_num from
(SELECT hacker_id , COUNT(challenge_id) challenge_num from Challenges 
group by hacker_id
order by COUNT(challenge_id) DESC) a
LEFT JOIN
(SELECT hack.hacker_id, hack.challenge_num from (SELECT hacker_id , COUNT(challenge_id) challenge_num from Challenges 
group by hacker_id
order by COUNT(challenge_id) DESC) hack  JOIN 
(SELECT COUNT(hacker_id), challenge_num from 
(SELECT hacker_id , COUNT(challenge_id) challenge_num from Challenges 
group by hacker_id
order by COUNT(challenge_id) DESC) hack
group by challenge_num
having Count(hacker_id) = 1) single_hack on single_hack.challenge_num = hack.challenge_num) b
on a.hacker_id = b.hacker_id
where b.hacker_id > 1 or a.challenge_num = 50
order by a.challenge_num DESC, a.hacker_id) cha 
JOIN hackers 
on cha.hacker_id = hackers.hacker_id;


SELECT ids.hacker_id, hackers.name, ids.sum_score from
(SELECT division.hacker_id, SUM(division.max_score) sum_score from
(SELECT hacker_id, challenge_id, MAX(score) max_score from Submissions
group by hacker_id, challenge_id) division
group by division.hacker_id
having SUM(division.max_score) <> 0
order by SUM(division.max_score) DESC, division.hacker_id) ids 
JOIN hackers on hackers.hacker_id = ids.hacker_id;



// Add your javascript here
if (window.FileReader) {
    var drop;
    addEventHandler(window, 'load', function() {
      drop = document.getElementById('drop');
      var image = document.getElementById('image');
  
      addEventHandler(drop, 'dragover', function(e){
           e.preventDefault();
      });
      addEventHandler(drop, 'dragenter', function(e){
           e.preventDefault();
      });
  
      addEventHandler(drop, 'drop', function(e) {
        if (e.preventDefault) {
          e.preventDefault();
        } 
  
        var files = e.dataTransfer.files;
        for (var i = 0; i < files.length; i++) {
          var file = files[i];
          var reader = new FileReader();
          reader.readAsDataURL(file);
          addEventHandler(reader, 'loadend', function(e, file) {
            var bin = this.result;
            var newFile = document.createElement('div');
            newFile.innerHTML = 'Loaded : ' + file.name + ' size ' + file.size + ' B';
            image.appendChild(newFile);
            var img = document.createElement("img");
            img.file = file;
            img.src = bin;
            image.appendChild(img);
          }.bindToEventHandler(file));
        }
        return false;
      });
      Function.prototype.bindToEventHandler = function bindToEventHandler() {
        var handler = this;
        var boundParameters = Array.prototype.slice.call(arguments);
        //create closure
        return function(e) {
          e = e || window.event; // get window.event if e argument missing (in IE)   
          boundParameters.unshift(e);
          handler.apply(this, boundParameters);
        }
      };
    });
  }
  
  function addEventHandler(obj, evt, handler) {
    if (obj.addEventListener) {
      obj.addEventListener(evt, handler, false);
    } else(obj.attachEvent) {
      obj.attachEvent('on' + evt, handler);
    } 
  }
