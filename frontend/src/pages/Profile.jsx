import React, { useState } from 'react';

const Profile = () => {
  const [user, setUser] = useState({
    name: 'Vinay Kumar',
    email: 'vinay.kunaryadav.217@gmail.com',
    mobile: '+918603719983',
    gender: 'Male',
    stressLevel: 3,
    activitiesCompleted: 12,
    yogaSessions: 15,
    todos: [
      { id: 1, text: 'Morning meditation', completed: true },
      { id: 2, text: 'Evening yoga session', completed: false },
      { id: 3, text: 'Write gratitude journal', completed: false },
    ],
  });

  const [isEditing, setIsEditing] = useState(false);
  const [newTodo, setNewTodo] = useState('');

  const handleUpdate = async (e) => {
    e.preventDefault();
    try {
      // Simulate API call to update profile
      console.log('Profile updated:', user);
      setIsEditing(false);
    } catch (err) {
      console.error('Error updating profile:', err.message);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const toggleTodo = (id) => {
    setUser({
      ...user,
      todos: user.todos.map(todo => 
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    });
  };

  const addTodo = (e) => {
    e.preventDefault();
    if (newTodo.trim()) {
      setUser({
        ...user,
        todos: [...user.todos, { 
          id: Date.now(), 
          text: newTodo, 
          completed: false 
        }]
      });
      setNewTodo('');
    }
  };

  return (
    <div className="max-w-4xl mx-auto my-8 p-8 bg-white rounded-xl shadow-lg">
      <h1 className="text-3xl font-bold text-gray-800 text-center mb-6">Mindful Profile</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Personal Information */}
        <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
          <h2 className="text-xl font-semibold text-gray-700 mb-4">Personal Information</h2>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-600">Name</label>
              {isEditing ? (
                <input
                  type="text"
                  name="name"
                  value={user.name}
                  onChange={handleChange}
                  className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
              ) : (
                <p className="text-gray-800">{user.name}</p>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-600">Stress Level</label>
              {isEditing ? (
                <input
                  type="range"
                  min="1"
                  max="5"
                  name="stressLevel"
                  value={user.stressLevel}
                  onChange={handleChange}
                  className="w-full mt-2"
                />
              ) : (
                <div className="flex items-center">
                  <div className="w-full bg-gray-200 rounded-full h-2.5">
                    <div 
                      className="bg-green-500 h-2.5 rounded-full" 
                      style={{ width: `${(user.stressLevel/5)*100}%` }}
                    ></div>
                  </div>
                  <span className="ml-2 text-gray-700">{user.stressLevel}/5</span>
                </div>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-600">Activities Completed</label>
              <p className="text-gray-800 text-lg font-medium">
                {user.activitiesCompleted} 🏆
              </p>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-600">Yoga Sessions</label>
              <p className="text-gray-800 text-lg font-medium">
                {user.yogaSessions} 🧘♂️
              </p>
            </div>
          </div>
        </div>

        {/* Wellness Todo List */}
        <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
          <h2 className="text-xl font-semibold text-gray-700 mb-4">Daily Wellness Tasks</h2>
          <form onSubmit={addTodo} className="mb-4">
            <input
              type="text"
              value={newTodo}
              onChange={(e) => setNewTodo(e.target.value)}
              placeholder="Add new wellness task"
              className="w-full p-2 border border-gray-300 rounded-lg mb-2"
            />
            <button 
              type="submit"
              className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition-colors"
            >
              Add Task
            </button>
          </form>
          <div className="space-y-2">
            {user.todos.map(todo => (
              <div 
                key={todo.id} 
                className="flex items-center bg-white p-3 rounded-lg shadow-sm"
              >
                <input
                  type="checkbox"
                  checked={todo.completed}
                  onChange={() => toggleTodo(todo.id)}
                  className="w-4 h-4 text-blue-600 rounded focus:ring-blue-500"
                />
                <span className={`ml-2 ${todo.completed ? 'line-through text-gray-400' : 'text-gray-700'}`}>
                  {todo.text}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Progress Section */}
      <div className="mt-8 bg-gray-50 p-6 rounded-lg shadow-sm">
        <h2 className="text-xl font-semibold text-gray-700 mb-4">Weekly Progress</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="bg-white p-4 rounded-lg text-center">
            <p className="text-2xl font-bold text-blue-600">{user.yogaSessions}</p>
            <p className="text-sm text-gray-600">Yoga Sessions</p>
          </div>
          <div className="bg-white p-4 rounded-lg text-center">
            <p className="text-2xl font-bold text-green-600">{user.activitiesCompleted}</p>
            <p className="text-sm text-gray-600">Activities Done</p>
          </div>
          <div className="bg-white p-4 rounded-lg text-center">
            <p className="text-2xl font-bold text-purple-600">{user.todos.filter(t => t.completed).length}</p>
            <p className="text-sm text-gray-600">Tasks Completed</p>
          </div>
          <div className="bg-white p-4 rounded-lg text-center">
            <p className="text-2xl font-bold text-orange-600">{user.stressLevel}/5</p>
            <p className="text-sm text-gray-600">Stress Level</p>
          </div>
        </div>
      </div>

      {/* Edit/Save Buttons */}
      <div className="flex justify-end mt-6 space-x-4">
        {isEditing ? (
          <>
            <button
              type="button"
              onClick={() => setIsEditing(false)}
              className="bg-red-500 text-white py-2 px-4 rounded-lg hover:bg-red-600 transition-colors"
            >
              Cancel
            </button>
            <button
              type="submit"
              onClick={handleUpdate}
              className="bg-green-500 text-white py-2 px-4 rounded-lg hover:bg-green-600 transition-colors"
            >
              Save Changes
            </button>
          </>
        ) : (
          <button
            onClick={() => setIsEditing(true)}
            className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition-colors"
          >
            Edit Profile
          </button>
        )}
      </div>
    </div>
  );
};

export default Profile;