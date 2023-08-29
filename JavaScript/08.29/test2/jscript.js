const dropTarget = document.querySelector(".drop-target");
const dragItems = document.querySelectorAll(".drag-item");

dragItems.forEach((item) => {
  item.addEventListener("dragstart", () => {
    setTimeout(() => {
      item.classList.add("dragging");
    }, 0);
  });
  item.addEventListener("dragend", () => item.classList.remove("dragging"));
});

function handleDragOver(e) {
  e.preventDefault();
  const draggingItem = dropTarget.querySelector(".dragging");
  const notDraggingItems = Array.from(
    dropTarget.querySelectorAll(".drag-item:not(.dragging)")
  );

  const nextItem = notDraggingItems.find((item) => {
    console.log(
      "clientY:",
      e.clientY,
      "offsetHeigth:",
      item.offsetHeight,
      "offsetTop:",
      item.offsetTop
    );
    return e.clientY <= item.offsetTop + item.offsetHeight / 2;
  });
  dropTarget.insertBefore(draggingItem, nextItem);
}

dropTarget.addEventListener("dragover", handleDragOver);
dropTarget.addEventListener("dragenter", (e) => e.preventDefault());
