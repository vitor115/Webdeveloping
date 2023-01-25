

function getFlag(flag)
{
    const arr = process.argv
    return arr[arr.indexOf(flag)+1]

}

module.exports = getFlag;