fetch('project.json')
    .then((response) => response.json())
    .then(function(json) {
        let assetContainer = document.querySelector("#Asset_contain");
        let journeyBoardList = document.querySelector("#Journey-Board");
        let assetHTML = "";
        let journeyBoardHTML = `<li><b>${json.tasks[0].task_title}</b></li>`;
        
        for (let asset of json.tasks[0].assets) {
            if (asset.asset_type === "display_asset") {
                assetHTML += `
                    <div id="asset${asset.asset_id}" class="asset">
                        <div class="asset-title"><p>${asset.asset_title}</p><i class="fa-solid fa-info"></i></div>
                        <div class="asset-description"><b>Description: </b>${asset.asset_description}</div>
                        <div><iframe src=${asset.asset_content} title="YouTube video"></iframe></div>
                    </div>
                `;
                journeyBoardHTML += `
                    <li>${asset.asset_title}</li>
                `;
            } else {
                assetHTML += `
                    <div id="asset${asset.asset_id}" class="asset">
                        <div class="asset-title"><p>${asset.asset_title}</p><i class="fa-solid fa-info"></i></div>
                        <div class="asset-description"><b>Description: </b>${asset.asset_description}</div>
                        <div>${asset.asset_content}</div>
                    </div>
                `;
                journeyBoardHTML += `
                    <li>${asset.asset_title}</li>
                `;
            }
        }

        assetContainer.innerHTML = assetHTML;
        journeyBoardList.innerHTML = journeyBoardHTML;
    });
