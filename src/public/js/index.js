const authUrl = "https://www.eventbrite.com/oauth/authorize"
const tokenUrl = "https://www.eventbrite.com/oauth/token"
const privateToken = "D5CDQLC4PMMQHMDUL4CT"
const baseUrl = "https://www.eventbriteapi.com/v3/organizations/D5CDQLC4PMMQHMDUL4CT/events/"
const userUrl = "https://www.eventbriteapi.com/v3/events/?token=D5CDQLC4PMMQHMDUL4CT"

// fetch eventbrite event from url and show all events in #events

function getEvents() {
    fetch(userUrl).then(response => response.json()).then(data => {
        console.log(data);
        document.getElementById("events").innerHTML = `
            
            <div class="card mb-3" style="max-width: 540px;">
                <div class="row g-0">
                    <div class="col-md-4">
                        <img src="https://picsum.photos/200/300" class="img-fluid rounded-start" alt="...">
                    </div>
                    <div class="col-md-8">
                        <div class="card-body">
                            <h5 class="card-title">
                                ${data.name}
                            </h5>
                            <p class="card-text">
                           
                                ${data.description.text}  
                            </p>
                            <p class="card-text"><small class="text-muted">${data.phone}</small></p>
                        </div>
                    </div>
                </div>
            </div>
        `
    })
}

getEvents()