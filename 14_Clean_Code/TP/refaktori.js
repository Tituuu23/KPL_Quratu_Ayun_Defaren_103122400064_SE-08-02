async function fetchOrderDetails(orderId, token) {
    try {
        const order = await getOrderDetails(orderId, token);
        renderOrderModal(order, token);
    } catch (error) {
        handleError(error);
    }
}

async function getOrderDetails(orderId, token) {
    const response = await fetch(
        `https://example.com/api/order/${orderId}`,
        {
            headers: {
                Authorization: token
            }
        }
    );

    if (!response.ok) {
        throw new Error("Failed to fetch order details");
    }

    return response.json();
}

function renderOrderModal(order, token) {
    const modal = document.getElementById("orderModal");

    renderOrderInfo(modal, order);
    setupCloseButton(modal);
    setupConfirmButton(modal, order, token);

    showModal(modal);
}

function renderOrderInfo(modal, order) {
    const detailsDiv = modal.querySelector("#orderDetails");

    detailsDiv.innerHTML = `
        <h3>Order ID: ${order.id}</h3>
        <p>Status: ${order.status}</p>
    `;
}

function showModal(modal) {
    modal.style.display = "block";
}

function hideModal(modal) {
    modal.style.display = "none";
}

function setupCloseButton(modal) {
    const closeBtn = modal.querySelector(".close");

    closeBtn.onclick = () => {
        hideModal(modal);
    };
}

function setupConfirmButton(modal, order, token) {
    const confirmBtn = modal.querySelector("#confirmOrderBtn");

    if (order.status === "Delivered") {
        confirmBtn.style.display = "none";
        return;
    }

    confirmBtn.style.display = "block";

    confirmBtn.onclick = () => {
        confirmOrder(order.id, token);
    };
}

function handleError(error) {
    console.error("Error:", error);
}