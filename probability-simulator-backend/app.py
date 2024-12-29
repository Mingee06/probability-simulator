from flask import Flask, request, jsonify
import random

app = Flask(__name__)

@app.route('/simulate_monty_hall', methods=['POST'])
def simulate_monty_hall():
    try:
        data = request.json
        trials = data.get('trials', 1000)
        switch = data.get('switch', True)  # Whether the player switches or stays

        stay_wins = 0
        switch_wins = 0

        for _ in range(trials):
            # Set up doors
            doors = [0, 0, 0]  # 0 = goat, 1 = car
            car_position = random.randint(0, 2)
            doors[car_position] = 1

            # Player makes an initial choice
            player_choice = random.randint(0, 2)

            # Host opens a door with a goat
            host_choice = random.choice(
                [i for i in range(3) if i != player_choice and doors[i] == 0]
            )

            # Player switches or stays
            if switch:
                player_choice = [i for i in range(3) if i != player_choice and i != host_choice][0]

            # Check if the player wins
            if doors[player_choice] == 1:
                if switch:
                    switch_wins += 1
                else:
                    stay_wins += 1

        return jsonify({
            'stay_wins': stay_wins,
            'switch_wins': switch_wins,
            'trials': trials
        })

    except Exception as e:
        return jsonify({'error': str(e)}), 400


@app.route('/simulate_binomial', methods=['POST'])
def simulate_binomial():
    try:
        data = request.json
        trials = data.get('trials', 1000)
        probability = data.get('probability', 0.5)

        results = {}
        for _ in range(trials):
            successes = sum(1 for _ in range(10) if random.random() < probability)
            results[successes] = results.get(successes, 0) + 1

        return jsonify({'results': results})

    except Exception as e:
        return jsonify({'error': str(e)}), 400



if __name__ == '__main__':
    app.run(debug=True, port=5000)