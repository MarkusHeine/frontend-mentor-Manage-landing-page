export const testimonialsCard = async () => {
    const testemonialsCardWrapper = document.querySelector(
        "#testemonials-card-wrapper"
    );
    const resp = await fetch("../assets/data/testimonials.json");
    const testimonials = await resp.json();
    const columns = testimonials.map(testimonial => {
        const name = testimonial.name.split(" ")[0];
        return `
            <li>
                <div class="testemonial-card">
                    <img
                        src="./assets/images/avatar/avatar-${name}.png"
                        alt="avator of User ${testimonial.name}"
                      />
                    <div class="testimonial-body">
                        <h3>${testimonial.name}</h3>
                        <p>${testimonial.body}</p>
                    </div>
                </div>
              </li>
      `;
    });
    const cards = `<ul>${columns.join("")}</ul>`;
    testemonialsCardWrapper.innerHTML = cards;
};
