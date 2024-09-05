document.addEventListener('DOMContentLoaded', () => {
    const loader = document.getElementById('loader');
    const rewardSection = document.getElementById('reward');
    const main = document.getElementById('main');
    const rewardAmountElem = document.getElementById('reward-amount');
    const claimBtn = document.getElementById('claim-btn');
    const balanceAmountElem = document.getElementById('balance-amount');

    // Simulate loading for 3 seconds
    setTimeout(() => {
        loader.classList.add('hidden');
        rewardSection.classList.remove('hidden');

        // Check if the user has already received a reward
        let balance = localStorage.getItem('ratcoin_balance');
        if (balance === null) {
            // Generate a random reward between 1000 and 5000
            const randomReward = Math.floor(Math.random() * (5000 - 1000 + 1)) + 1000;
            rewardAmountElem.textContent = randomReward;
            balance = randomReward;
        } else {
            // If the balance is already set, go straight to the main page
            showMainPage(balance);
        }

        // Set button click event
        claimBtn.addEventListener('click', () => {
            localStorage.setItem('ratcoin_balance', balance);
            showMainPage(balance);
        });

    }, 3000);

    function showMainPage(balance) {
        rewardSection.classList.add('hidden');
        main.classList.remove('hidden');
        balanceAmountElem.textContent = balance;
    }
});
