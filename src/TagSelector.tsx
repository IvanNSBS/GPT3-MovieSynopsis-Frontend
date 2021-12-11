import React, { useState } from "react";
import Select from 'react-select';

const tags = [
    { value: 'flashback', label: 'Flashback'},
    { value: 'romantic', label: 'Romantic'},
    { value: 'cult', label: 'Cult'},
    { value: 'psychedelic', label: 'Pshychedelic'},
    { value: 'suspenseful', label: 'Suspenseful'},
    { value: 'goodversusevil', label: 'Good v Evil' },
    { value: 'action', label: 'Action'},
    { value: 'fantasy', label: 'Fantasy'},
    { value: 'storytelling', label: 'Storytelling'},
    { value: 'psychological', label: 'Psychological'},
    { value: 'historical', label: 'Historical'},
    { value: 'absurd', label: 'Absurd'},
    { value: 'prank', label: 'Prank'},
    { value: 'sentimental', label: 'Sentimental'},
    { value: 'philosophical', label: 'Philosofical'},
    { value: 'avantgarde', label: 'Avantgarde'},
    { value: 'bleak', label: 'Bleak'}
];

const TagSelector: React.FC<{setTags(value: [string]): void}> = function (props)
{
    const [selected, setSelected] = useState<any>([]);
    const handleChange = function(e: any){
        setSelected(Array.isArray(e) ? e.map(x => x.value) : []);
        console.log(selected);
    }

    return (
        <div className="App">
            <Select
                className="dropdown"
                placeholder="Select Option"
                value={tags.filter(obj => selected.includes(obj.value))} // set selected values
                options={tags} // set list of the data
                onChange={handleChange} // assign onChange function
                isMulti
                isClearable
            />
    
            {selected && <div style={{ marginTop: 20, lineHeight: '25px' }}>
            </div>}
      </div>
    );
}

export default TagSelector;