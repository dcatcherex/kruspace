export const handleBookmark = (bookmarkedItems: number[], setBookmarkedItems: Function, toast: Function) => (itemId: number) => {
    if (bookmarkedItems.includes(itemId)) {
      setBookmarkedItems(bookmarkedItems.filter((id) => id !== itemId).sort());
    } else {
      setBookmarkedItems([...bookmarkedItems, itemId].sort());
      toast("Set Bookmark");
    }
};