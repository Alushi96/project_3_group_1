import React, { Component } from "react";


export default class Healthcondition extends Component {

    state = {
        loading: true,
        resources: null
      };
  
      async componentDidMount() {
        const url = "https://health.gov/myhealthfinder/api/v3/topicsearch.json?lang=en&keyword=cancer";
        const response = await fetch(url);
        const data = await response.json();

       this.setState({ resources: data.Result.Resources.Resource, loading: false });

        var test = data.Result.Resources.Resource;
        console.log("test", test);
        test.map(resources => {
          console.log("Resources.Title: ", resources.Title);
          console.log("Resources.imageurl: ", resources.ImageUrl);
        })

      };

      
  render() {
    if (this.state.loading) {
      return <div>loading...</div>;
    }

    if (!this.state.resources) {
      return <div>didn't get a resource</div>
    }

    return (

        


          <div>
            {this.state.resources.map(resource => 
                <div>
                    <hr/>
                    <div class="row">
                    <div class="col-8"><h4>{resource.Title}</h4></div>
                    <div class="col-4"> <img alt={resource.ImageAlt} className="img-fluid" src={resource.ImageUrl} style={{ margin: "0 auto" }} />
                    </div>
                    </div>

            </div>
            )}

          </div>
    );
  }
}