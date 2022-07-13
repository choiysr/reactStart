import School from "./ch15ContextAPI/components/School";

const AppCh15Test = () => {
    return (
        <div>
            <School students={[{
                name: '할렐루야',
                age: 22
            },
                {
                    name: '김렐루야',
                    age: 21
                }
            ]}/>
        </div>
    );
}

export default AppCh15Test;