$(function() {
	var os = require('os');

	var prettyBytes = require('pretty-bytes');

	var React = require('react/addons');
	alert("!23")
	var Stats = React.createClass({displayName: "Stats",
		render: function() {
			alert("123")
			return (
				React.createElement("p", {class: "stats"}, 
				"Number of cpu cores: ", React.createElement("span", null, os.cpus().length), 
				"Free memory: ", React.createElement("span", null, prettyBytes(os.freemem()))
				)
			)
		}
	})
	React.render(React.createElement(Stats, null), $(".react"));
})
