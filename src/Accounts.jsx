import { useState, useEffect } from "react";

export default function Accounts() {

    const username = 'bhargav_9989';

    const [loading, setLoading] = useState(true);
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch('https://codechef-api.vercel.app/handle/' + username)
            .then(response => response.json())
            .then(data => {
                setData(data);
                setLoading(false);
            })
            .catch(() => setLoading(false));
    }, []);

    return (
        <div className="flex items-center justify-center my-6">
            {loading ? <h1>Loading...</h1> : (
                <div className="max-w-sm w-full bg-white shadow-lg rounded-lg overflow-hidden">
                    <div className="bg-indigo-500 px-6 py-4">
                    <h2 className="text-white text-xl font-bold">CodeChef Profile</h2>
                    <p className="text-indigo-200">@{username}</p>
                    </div>
                    <div className="p-6">
                    <div className="flex items-center mb-4">
                        <div className="text-blue-400 text-4xl font-bold">{ data.stars } </div>
                        <div className="ml-4">
                        <h3 className="text-lg font-semibold text-gray-700">Star Rating</h3>
                        <p className="text-sm text-gray-500">Highest: <span className="font-medium text-indigo-500">{ data.highestRating }</span></p>
                        </div>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                        <div>
                        <h4 className="text-gray-700 text-sm font-medium">Country Rank</h4>
                        <p className="text-indigo-500 text-lg font-bold">#{data.countryRank}</p>
                        </div>
                        <div>
                        <h4 className="text-gray-700 text-sm font-medium">Global Rank</h4>
                        <p className="text-indigo-500 text-lg font-bold">#{data.globalRank}</p>
                        </div>
                    </div>
                    <div className="mt-4">
                        <h4 className="text-gray-700 text-sm font-medium">Current Rating</h4>
                        <p className="text-indigo-500 text-lg font-bold">{data.currentRating}</p>
                    </div>
                    <button className="mt-6 w-full bg-blue-400 text-white py-2 rounded-lg hover:bg-blue-600 transition duration-200"
                        onClick={() => window.open(`https://www.codechef.com/users/${username}`, '_blank')} >
                        View Profile
                    </button>
                </div>
            </div>
            )}
        </div>
    );
}