const dateElement = document.getElementById('date');
console.log(dateElement)
let currentDate = new Date();

console.log(currentDate);

let dateOptions = {year: 'numeric', month: 'long', day: 'numeric'};

dateElement.innerHTML = currentDate.toLocaleDateString('en-US', dateOptions);

let graphData = [
	
	];

// Rapid API code to retrieve twitter topics 
const url = 'https://twitter-trends5.p.rapidapi.com/twitter/request.php';
const data = new FormData();
data.append('woeid', '23424934');

const options = {
	method: 'POST',
	headers: {
		'x-rapidapi-key': '13c616a7f1mshe62a037991598b9p173f8bjsn9ed60076e413',
		'x-rapidapi-host': 'twitter-trends5.p.rapidapi.com'
	},
	body: data
};

// fetch request allows us to retrieve the datae from Twitter API Server
fetch(url, options)
.then(res => res.json())
.then(data => {
	console.log(data);
	
for (let i = 0; i < 15; i++) {
	graphData.push({
		"name": data.trends[i].name,
		"volume": data.trends[i].volume
	})
};

let topics = graphData.map(object => {
	console.log(object);
	console.log(object.name);
	return object.name;
});
console.log(topics);

let volumes =graphData.map(object => {
	return object.volume;
});

console.log(volumes);
//================================


// Chart
const myChart = document.getElementById('myChart');

  let barChart = new Chart(myChart, {
    type: 'bar',
    data: {
      labels: topics,
      datasets: [{
        label: '# of tweets/xeets',
        data: volumes,
        borderWidth: 2,
        backgroundColor: [
        	'rgba(255, 99, 132, 0.2)',
        	'rgba(255, 159, 64, 0.2)',
        	'rgba(255, 205, 86, 0.2)',
        	'rgba(75, 192, 192, 0.2)',
        	'rgba(54, 162, 235, 0.2)',
        	'rgba(153, 102, 255, 0.2)',
        	'rgba(201, 203, 207, 0.2)'
       	],
       	borderColor: [
       		'rgb(255, 99, 132)',
			'rgb(255, 159, 64)',
			'rgb(255, 205, 86)',
			'rgb(75, 192, 192)',
			'rgb(54, 162, 235)',
			'rgb(153, 102, 255)',
			'rgb(201, 203, 207)'
		],
		hoverBackgroundColor: [
			'rgb(255, 99, 132)',
			'rgb(255, 159, 64)',
			'rgb(255, 205, 86)',
			'rgb(75, 192, 192)',
			'rgb(54, 162, 235)',
			'rgb(153, 102, 255)',
			'rgb(201, 203, 207)'
		]
      }]
    },
    options: {
      indexAxis: 'y',
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }
  });
});
