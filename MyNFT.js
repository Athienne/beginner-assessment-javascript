const NFTs = [] // list of NFTs

function mintNFT(_name, _eyeColor, _shirtType, _bling){
    const NFT = {
        "name": _name,
        "eyeColor": _eyeColor,
        "shirtType": _shirtType,
        "bling": _bling
    }
    NFTs.push(NFT);
    console.log("\n" + "Minted (Name of NFT): " + _name + "\n");
}

function listNFTs(){
    for(let i = 0; i < NFTs.length; i++){
        console.log("ID: \t" + (i + 1)) // enclosed in parenthesis in order to proceed with the addition function
        console.log("Name: \t" + NFTs[i].name);
        console.log("Eye Color: \t" + NFTs[i].eyeColor);
        console.log("Shirt Type: \t" + NFTs[i].shirtType);
        console.log("Bling: \t" + NFTs[i].bling);
    }
    console.log("\n");
}

function getTotalSupply(){
    console.log("Number of NFTs: " + NFTs.length);
}

mintNFT("Mark", "Black", "Sweater", "Social Credit Scores");
mintNFT("David", "Gray", "V-Neck Shirts", "Gold Rings");
// You may create your own NFT by creating a function call in this line.
// "mintNFT("your desired name of NFT", "your desired eye color", "your desired shirt type", "your desired bling"); 

listNFTs(); // Displays the list of created NFTs
getTotalSupply(); // Displays the number of NFTs created
