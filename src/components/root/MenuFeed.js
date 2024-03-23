import React from 'react';
import MenuCard from './MenuCard';
import MenuSearch from './MenuSearch';
import cafeteriaMenu from '../../utils/cafetariaMenu';
import { motion } from 'framer-motion'; 

const MenuFeed = ({ cart, setCart }) => {
    return (
        <div className='flex flex-col gap-8 p-9 justify-center items-center'>
            <MenuSearch />
            <motion.div
            initial={{y:200}}
            className='flex sm:flex-row flex-col gap-6 flex-wrap p-5'
            whileInView={{y:0}}
            transition={{duration:1, easeIntensity: .7,type: "spring" }}
            >
                {Object.entries(cafeteriaMenu).map(([cafeteriaName, { description, menuItems }]) => (
                    <MenuCard key={cafeteriaName} cafeteriaName={cafeteriaName} menuItems={menuItems} description={description} setCart={setCart} />
                ))}
            </motion.div>
        </div>
    );
};

export default MenuFeed;
