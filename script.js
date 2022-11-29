const menuToggle = document.querySelector(".menu-toggle");
const navigation = document.querySelector(".navigation");

menuToggle.onclick = () => {
  navigation.classList.toggle("open");
};

const listItem = document.querySelectorAll(".list-item");

listItem.forEach((item) => {
  item.onclick = () => {
    listItem.forEach((item) => item.classList.remove("active"));

    item.classList.add("active");
  };
});
