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
    // clientY :
    console.log(
      "clientY: ",
      e.clientY,
      "/ offsetTop: ",
      item.offsetTop,
      "/offsetHeight",
      item.offsetHeight
    );

    return e.clientY <= item.offsetTop + item.offsetHeight / 2;
  });

  dropTarget.insertBefore(draggingItem, nextItem);
}

dropTarget.addEventListener("dragover", handleDragOver);
dropTarget.addEventListener("dragenter", (e) => e.preventDefault());
