import React from "react";

const values = {
    'Horror': 'horror',
    'Comedy': 'comedy',
    'Blaines': 'blaines'
};

const TagSelector: React.FC<{setTags(value: [string]): void}> = function (props)
{


    return (
        <select name='tags' id='tags' multiple>
            <option value=''>Horror</option>    
            <option value=''>Comedy</option>    
            <option value=''>Clevers</option>    
            <option value=''>Blaines</option>    
            <option value=''>Blaines</option>    
            <option value=''>Blaines</option>    
            <option value=''>Blaines</option>    
            <option value=''>Blaines</option>    
            <option value=''>Blaines</option>    
            <option value=''>Blaines</option>    
            <option value=''>Blaines</option>    
            <option value=''>Blaines</option>    
        </select>
    );
}

export default TagSelector;