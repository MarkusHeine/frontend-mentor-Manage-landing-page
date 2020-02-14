export const featuresCard = async () => {
    const featuresWrapper = document.querySelector("#features-wrapper");
    const resp = await fetch("../assets/data/features.json");
    const features = await resp.json();

    const rows = features.map(feature => {
        return `
            <li>
                <div class="feature-card">
                    <div class="fcard-id elem-shape orange">${feature.id}</div>
                    <h3 class="fcard-title">${feature.title}</h3>
                    <p class="fcard-body">${feature.body}</p>
                </div>
            </li>
            `;
    });
    const cards = `<ul>${rows.join("")}</ul>`;
    featuresWrapper.innerHTML = cards;
};
