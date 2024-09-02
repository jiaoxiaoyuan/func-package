/**
 * 获取选中的文本
 * 该函数没有参数。
 * @returns 返回选中文本的字符串表示。
 */

function getSelection(): string {
    // (window as any)是一个类型断言，可能是为了避免TypeScript的类型检查。
    return (window as any).getSelection().toString();

    // try {
    //     const selection = window.getSelection();
    //     if (!selection) {
    //         return "";
    //     }

    //     const selectedText = selection.toString();
    //     if (!selectedText) {
    //         console.log("No text is selected.");
    //         return "";
    //     }

    //     return selectedText;
    // } catch (error) {
    //     console.error("An error occurred while getting selected text", error);
    //     return "";
    // }

    // if (typeof window.getSelection != "undefined") {
    //     const selection: Selection | null = window.getSelection();
    //     if (selection && selection.rangeCount > 0) {
    //         return selection.toString();
    //     }
    // } else if (
    //     typeof document.selection != "undefined" &&
    //     document.selection.type != "Control"
    // ) {
    //     const range = (<any>document.selection).createRange();
    //     return range.text;
    // }

    // throw new Error("No text is selected");
}

export default getSelection;
