wp.blocks.registerBlockType('bubblecritic/bc-div',
	{
		title: 'Bubble Critic Forums',
		icon: 'excerpt-view',
		category: 'embed',
		attributes: {},
		edit: function(props) {
			/*________________________________________ EDIT HTML ________________________________________
			<div style={{background: "#223d44", padding: "20px"}}>
				<p style={{fontSize: "20px", color: "white", fontFamily: "'Lucida Sans Unicode', 'Lucida Grande', sans-serif", margin: "0"}}>Bubble Critic forums are installed here.</p>
			</div>
			-------------------------------------------------------------------------------------------*/
			return wp.element.createElement("div", {
			  style: {
			    background: "#223d44",
			    padding: "20px"
			  }
			}, wp.element.createElement("p", {
			  style: {
			    fontSize: "20px",
			    color: "white",
			    fontFamily: "'Lucida Sans Unicode', 'Lucida Grande', sans-serif",
			    margin: "0"
			  }
			}, "Bubble Critic forums are installed here."));
		},
		save: function(props) {
			/*________________________________________ SAVE HTML ________________________________________
			<div>
				<div id="bcDiv"></div>
				<link rel="stylesheet" crossorigin="anonymous" href="https://www.bubblecritic.com/css/embed/the_css.css"/> 
				<script async src="//bubblecritic.com/js/embed/the_js.js"></script>
			</div>
			-------------------------------------------------------------------------------------------*/
			return wp.element.createElement("div", null, wp.element.createElement("div", {
			  id: "bcDiv"
			}), wp.element.createElement("link", {
			  rel: "stylesheet",
			  crossorigin: "anonymous",
			  href: "https://www.bubblecritic.com/css/embed/the_css.css"
			}), wp.element.createElement("script", {
			  async: true,
			  src: "https://www.bubblecritic.com/js/embed/the_js.js"
			}));
		}
	}
);

