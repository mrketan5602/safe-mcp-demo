import fs from "fs";

function summarizeDocument(filePath) {
    const document = fs.readFileSync(filePath, "utf8");

    return {
        success: true,
        message: "Document received for summarization.",
        characters: document.length
    };
}

export { summarizeDocument };