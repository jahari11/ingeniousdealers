import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { EDGE_FUNCTIONS_URL } from '../../config/supabase';

const SubscriberDashboard = () => {
  const [subscribers, setSubscribers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [stats, setStats] = useState({
    total: 0,
    active: 0,
    today: 0
  });

  useEffect(() => {
    fetchSubscribers();
  }, []);

  const fetchSubscribers = async () => {
    try {
      setLoading(true);
      
      const response = await fetch(`${EDGE_FUNCTIONS_URL}/phone-numbers`, {
        headers: {
          'Authorization': `Bearer ${process.env.REACT_APP_SUPABASE_ANON_KEY}`
        }
      });
      
      if (response.ok) {
        const data = await response.json();
        setSubscribers(data.phoneNumbers || []);
        
        // Use stats from the API response
        setStats(data.stats || { total: 0, active: 0, today: 0 });
      } else {
        const errorData = await response.json();
        setError(errorData.error || 'Failed to fetch subscribers');
      }
    } catch (err) {
      console.error('Failed to fetch subscribers:', err);
      setError('Unable to connect to Supabase. Please check your internet connection.');
    } finally {
      setLoading(false);
    }
  };

  const toggleSubscriberStatus = async (phoneNumber, isActive) => {
    try {
      const response = await fetch(`${EDGE_FUNCTIONS_URL}/phone-numbers/${phoneNumber}`, {
        method: 'PUT',
        headers: { 
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${process.env.REACT_APP_SUPABASE_ANON_KEY}`
        },
        body: JSON.stringify({ is_active: !isActive })
      });
      
      if (response.ok) {
        fetchSubscribers(); // Refresh the list
      } else {
        const errorData = await response.json();
        setError(errorData.error || 'Failed to update subscriber status');
      }
    } catch (err) {
      console.error('Failed to update subscriber status:', err);
      setError('Unable to update subscriber status. Please check your connection.');
    }
  };

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-100 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"></div>
          <p className="mt-4 text-gray-600">Loading subscribers...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Launch Update Subscribers</h1>
          <p className="text-gray-600">Manage your launch update subscribers</p>
        </motion.div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="bg-white rounded-lg shadow p-6"
          >
            <div className="flex items-center">
              <div className="p-2 bg-blue-100 rounded-lg">
                <i className="fa-solid fa-users text-blue-600 text-xl"></i>
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600">Total Subscribers</p>
                <p className="text-2xl font-bold text-gray-900">{stats.total}</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-white rounded-lg shadow p-6"
          >
            <div className="flex items-center">
              <div className="p-2 bg-green-100 rounded-lg">
                <i className="fa-solid fa-check-circle text-green-600 text-xl"></i>
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600">Active Subscribers</p>
                <p className="text-2xl font-bold text-gray-900">{stats.active}</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="bg-white rounded-lg shadow p-6"
          >
            <div className="flex items-center">
              <div className="p-2 bg-purple-100 rounded-lg">
                <i className="fa-solid fa-calendar-day text-purple-600 text-xl"></i>
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600">Signed Up Today</p>
                <p className="text-2xl font-bold text-gray-900">{stats.today}</p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Error Message */}
        {error && (
          <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-6">
            <div className="flex">
              <i className="fa-solid fa-exclamation-circle text-red-400 mr-2"></i>
              <p className="text-red-800">{error}</p>
            </div>
          </div>
        )}

        {/* Subscribers Table */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="bg-white rounded-lg shadow overflow-hidden"
        >
          <div className="px-6 py-4 border-b border-gray-200">
            <h2 className="text-lg font-semibold text-gray-900">Subscriber List</h2>
          </div>
          
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Phone Number
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Source
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Status
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Signed Up
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {subscribers.map((subscriber, index) => (
                  <motion.tr
                    key={subscriber.id}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05 }}
                    className="hover:bg-gray-50"
                  >
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                      {subscriber.phone_number}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {subscriber.source || 'password_page'}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${
                        subscriber.is_active 
                          ? 'bg-green-100 text-green-800' 
                          : 'bg-red-100 text-red-800'
                      }`}>
                        {subscriber.is_active ? 'Active' : 'Inactive'}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {formatDate(subscriber.created_at)}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                      <button
                        onClick={() => toggleSubscriberStatus(subscriber.phone_number, subscriber.is_active)}
                        className={`${
                          subscriber.is_active 
                            ? 'text-red-600 hover:text-red-900' 
                            : 'text-green-600 hover:text-green-900'
                        }`}
                      >
                        {subscriber.is_active ? 'Deactivate' : 'Activate'}
                      </button>
                    </td>
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </div>
          
          {subscribers.length === 0 && (
            <div className="text-center py-12">
              <i className="fa-solid fa-users text-gray-300 text-4xl mb-4"></i>
              <p className="text-gray-500">No subscribers yet</p>
            </div>
          )}
        </motion.div>
      </div>
    </div>
  );
};

export default SubscriberDashboard;
